package com.dinnye.backend.db.repository

import com.dinnye.backend.db.model.Assistant
import com.dinnye.backend.db.model.Doctor
import com.dinnye.backend.db.model.Parent
import com.dinnye.backend.db.model.User
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.data.jpa.repository.Query
import org.springframework.stereotype.Repository
import java.util.*

@Repository
interface UserRepository: JpaRepository<User, Long> {
    @Query("select assistant from Assistant assistant where assistant.id = :id")
    fun findAssistantById(id: Long): Optional<Assistant>

    @Query("select doctor from Doctor doctor where doctor.id = :id")
    fun findDoctorById(id: Long): Optional<Doctor>

    @Query("select parent from Parent parent where parent.id = :id")
    fun findParentById(id: Long): Optional<Parent>

    @Query("select user from User user where user.email = :email")
    fun findByEmail(email: String): Optional<User>
}