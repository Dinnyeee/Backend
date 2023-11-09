package com.dinnye.backend.db.repository

import com.dinnye.backend.db.model.Case
import org.springframework.data.jpa.repository.JpaRepository

interface CaseRepository: JpaRepository<Case, Long> {
}