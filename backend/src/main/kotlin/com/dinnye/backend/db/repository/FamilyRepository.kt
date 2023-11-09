package com.dinnye.backend.db.repository

import com.dinnye.backend.db.model.Family
import org.springframework.data.jpa.repository.JpaRepository

interface FamilyRepository: JpaRepository<Family, Long> {
}