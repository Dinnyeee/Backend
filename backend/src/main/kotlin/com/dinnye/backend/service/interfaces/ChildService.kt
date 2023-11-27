package com.dinnye.backend.service.interfaces

import com.dinnye.backend.db.model.Case
import com.dinnye.backend.db.model.Child

interface ChildService: SimpleCrudService<Child> {
    fun getAllByEmail(email: String): List<Child>
}