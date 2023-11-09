package com.dinnye.backend.service.interfaces

import com.dinnye.backend.db.model.Assistant
import com.dinnye.backend.db.model.Doctor
import com.dinnye.backend.db.model.Parent
import com.dinnye.backend.db.model.User

interface UserService: SimpleCrudService<User> {
    fun findAssistantById(id: Long): Assistant
    fun findDoctorById(id: Long): Doctor
    fun findParentById(id: Long): Parent
}

interface DoctorService: SimpleCrudService<Doctor> {
    fun assignPraxis(praxisId: Long): Doctor
}
interface AssistantService: SimpleCrudService<Assistant>  {
    fun assignPraxis(praxisId: Long): Assistant
}
interface ParentService: SimpleCrudService<Parent> {
    fun assignFamily(familyId: Long): Parent
}