package com.dinnye.backend.db.repository

import com.dinnye.backend.db.model.Child
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface ChildRepository: JpaRepository<Child, Long> {
    fun findAllByFamilyId(familyId: Long): List<Child>
}