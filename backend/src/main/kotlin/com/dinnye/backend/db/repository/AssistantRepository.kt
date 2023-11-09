package com.dinnye.backend.db.repository

import com.dinnye.backend.db.model.Assistant
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface AssistantRepository: JpaRepository<Assistant, Long> {
}