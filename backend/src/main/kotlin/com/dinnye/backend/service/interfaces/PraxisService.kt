package com.dinnye.backend.service.interfaces

import com.dinnye.backend.db.model.Praxis

interface PraxisService: SimpleCrudService<Praxis> {
    fun removeFamily(email: String, familyId: Long)
    fun addFamily(email: String, familyId: Long)
}