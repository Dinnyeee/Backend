package com.dinnye.backend.db.repository

import com.dinnye.backend.db.model.Message
import org.springframework.data.jpa.repository.JpaRepository

interface MessageRepository: JpaRepository<Message, Long> {
    fun findAllByCaseIdOrderByCreatedAt(caseId: Long): List<Message>
}