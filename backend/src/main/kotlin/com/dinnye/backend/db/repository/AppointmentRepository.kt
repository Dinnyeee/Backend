package com.dinnye.backend.db.repository

import com.dinnye.backend.db.model.Appointment
import org.springframework.data.jpa.repository.JpaRepository

interface AppointmentRepository: JpaRepository<Appointment, Long> {
}