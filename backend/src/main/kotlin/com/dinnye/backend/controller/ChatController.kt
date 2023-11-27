package com.dinnye.backend.controller

import com.dinnye.backend.config.ChatConfigurationProperties
import com.dinnye.backend.dto.message.MessageGetDto
import com.dinnye.backend.dto.message.MessagePostDto
import com.dinnye.backend.mapper.MessageMapper
import com.dinnye.backend.service.interfaces.MessageService
import com.dinnye.backend.util.created
import jakarta.validation.Valid
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*


@RestController
@CrossOrigin("*")
@RequestMapping("/ws/message")
class ChatController(
        private val config: ChatConfigurationProperties,
        private val messageService: MessageService,
        private val messageMapper: MessageMapper
) {

    @PostMapping
    fun message(@Valid @RequestBody dto: MessagePostDto): ResponseEntity<Unit> {
        val message = messageService.newMessage(messageMapper.mapFromPost(dto))
        return created(message.id!!)
    }

    @GetMapping("/{caseId}")
    fun getMessage(@PathVariable caseId: Long): ResponseEntity<List<MessageGetDto>> {
        return ResponseEntity.ok(messageService.getMessages(caseId).map(messageMapper::mapToGet))
    }
}