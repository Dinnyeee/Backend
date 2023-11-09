package com.dinnye.backend.db.repository

import com.dinnye.backend.db.model.Child
import org.springframework.data.jpa.repository.JpaRepository

interface ChildRepository: JpaRepository<Child, Long> {
}