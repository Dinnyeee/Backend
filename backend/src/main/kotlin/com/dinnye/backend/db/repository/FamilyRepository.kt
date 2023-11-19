package com.dinnye.backend.db.repository

import com.dinnye.backend.db.model.Family
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface FamilyRepository: JpaRepository<Family, Long> {
}