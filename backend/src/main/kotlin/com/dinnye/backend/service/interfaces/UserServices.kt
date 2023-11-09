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

interface DoctorService: UserService {
    override fun create(entity: User): Doctor
    override fun update(entity: User): Doctor
    fun assignPraxis(praxisId: Long): Doctor
}
interface AssistantService: UserService {
    override fun create(entity: User): Assistant
    override fun update(entity: User): Assistant
    fun assignPraxis(praxisId: Long): Assistant
}
interface ParentService: UserService {
    override fun create(entity: User): Parent
    override fun update(entity: User): Parent
    fun assignFamily(familyId: Long): Parent
}

interface AdminService: UserService {}