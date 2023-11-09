package com.dinnye.backend.db.repository

import com.dinnye.backend.db.model.Parent
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface ParentRepository: JpaRepository<Parent, Long> {
}