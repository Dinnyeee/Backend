package com.dinnye.backend.service.interfaces

import com.dinnye.backend.db.model.Family

interface FamilyService: SimpleCrudService<Family> {
    fun getAll(token: String): List<Family>
}