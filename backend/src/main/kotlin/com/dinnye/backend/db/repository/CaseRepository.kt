package com.dinnye.backend.db.repository

import com.dinnye.backend.db.model.Case
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface CaseRepository: JpaRepository<Case, Long> {
}