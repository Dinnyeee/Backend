package com.dinnye.backend.db.repository

import com.dinnye.backend.db.model.Doctor
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface DoctorRepository: JpaRepository<Doctor, Long> {
}