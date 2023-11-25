package com.dinnye.backend.service.interfaces

import com.dinnye.backend.db.model.Message

interface MessageService {
    fun newMessage(newMessage: Message): Message
    fun getMessages(caseId: Long): List<Message>
}