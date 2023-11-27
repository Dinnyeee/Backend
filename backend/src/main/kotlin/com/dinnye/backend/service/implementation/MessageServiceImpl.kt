package com.dinnye.backend.service.implementation

import com.dinnye.backend.config.ChatConfigurationProperties
import com.dinnye.backend.db.model.Message
import com.dinnye.backend.db.repository.MessageRepository
import com.dinnye.backend.mapper.MessageMapper
import com.dinnye.backend.service.interfaces.MessageService
import com.pusher.rest.Pusher
import org.springframework.stereotype.Service

@Service
class MessageServiceImpl(
        private val messageRepository: MessageRepository,
        private val config: ChatConfigurationProperties,
        private val messageMapper: MessageMapper
) : MessageService {
    override fun newMessage(newMessage: Message): Message {
        val message = messageRepository.save(newMessage)
        val pusher = Pusher(config.appId, config.key, config.secret).also {
            it.setCluster(config.cluster)
            it.setEncrypted(true)
        }
        val channelName = "channel-${message.case!!.id}"
        pusher.trigger(channelName, "new-message", messageMapper.mapToGet(message))
        messageRepository.flush()
        return message
    }

    override fun getMessages(caseId: Long): List<Message> = messageRepository.findAllByCaseIdOrderByCreatedAt(caseId)
}