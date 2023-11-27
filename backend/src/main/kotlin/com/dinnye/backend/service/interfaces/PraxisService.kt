package com.dinnye.backend.service.interfaces

import com.dinnye.backend.db.model.Praxis

interface PraxisService: SimpleCrudService<Praxis> {
    fun removeFamily(token: String, familyId: Long)
    fun addFamily(token: String, familyId: Long)
}