package com.dinnye.backend.db.repository

import com.dinnye.backend.db.model.Praxis
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface PraxisRepository: JpaRepository<Praxis, Long> {
}