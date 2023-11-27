package com.dinnye.backend.service.implementation

import com.dinnye.backend.db.model.Assistant
import com.dinnye.backend.db.model.Doctor
import com.dinnye.backend.db.model.Family
import com.dinnye.backend.db.model.Parent
import com.dinnye.backend.db.model.Role
import com.dinnye.backend.db.repository.FamilyRepository
import com.dinnye.backend.service.interfaces.FamilyService
import com.dinnye.backend.service.interfaces.UserService
import com.dinnye.backend.util.findByIdOrThrow
import com.dinnye.backend.util.update
import org.springframework.stereotype.Service
import org.springframework.transaction.annotation.Isolation
import org.springframework.transaction.annotation.Transactional

@Service
class FamilyServiceImpl(
    private val familyRepository: FamilyRepository,
    private val jwtService: JwtService,
    private val userService: UserService
) : FamilyService {

    @Transactional(isolation = Isolation.SERIALIZABLE)
    override fun create(entity: Family): Family = familyRepository.saveAndFlush(entity)

    @Transactional(isolation = Isolation.READ_COMMITTED, readOnly = true)
    override fun get(id: Long): Family = familyRepository.findByIdOrThrow(id)

    @Transactional(isolation = Isolation.READ_COMMITTED, readOnly = true)
    override fun getAll(): List<Family> = familyRepository.findAll()

    @Transactional(isolation = Isolation.READ_COMMITTED, readOnly = true)
    override fun getAll(email: String): List<Family> {
        val user = userService.getByEmail(email)
        return when(user.role) {
            Role.PARENT -> (user as Parent).family?.let { listOf(it) } ?: emptyList()
            Role.DOCTOR -> (user as Doctor).praxis?.let { familyRepository.findAllByPraxisId(it.id!!) } ?: emptyList()
            Role.ASSISTANT -> (user as Assistant).praxis?.let { familyRepository.findAllByPraxisId(it.id!!) } ?: emptyList()
            else -> emptyList()
        }
    }

    @Transactional(isolation = Isolation.SERIALIZABLE)
    override fun update(entity: Family): Family {
        return familyRepository.update(entity.id!!) {
            entity.name?.let { this.name = it }
            entity.parent?.let { this.parent = it }
            entity.praxis?.let { this.praxis = it }
        }
    }

    @Transactional(isolation = Isolation.SERIALIZABLE)
    override fun delete(id: Long) = familyRepository.deleteById(id)
}