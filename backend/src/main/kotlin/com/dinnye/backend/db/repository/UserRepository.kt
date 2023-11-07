package com.dinnye.backend.db.repository

import org.springframework.data.jpa.repository.JpaRepository

interface UserRepository: JpaRepository<UserRepository, Long> {
}