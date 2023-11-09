package com.dinnye.backend.db.repository

import com.dinnye.backend.db.model.Praxis
import org.springframework.data.jpa.repository.JpaRepository

interface PraxisRepository: JpaRepository<Praxis, Long> {
}