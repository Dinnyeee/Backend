package com.dinnye.backend.db.repository

import org.springframework.data.jpa.repository.JpaRepository

interface FamilyRepository: JpaRepository<FamilyRepository, Long> {
}