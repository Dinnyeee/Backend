package com.dinnye.backend.service.implementation

import com.dinnye.backend.db.model.Assistant
import com.dinnye.backend.db.model.Case
import com.dinnye.backend.db.model.Doctor
import com.dinnye.backend.db.model.Parent
import com.dinnye.backend.db.model.Role
import com.dinnye.backend.db.repository.CaseRepository
import com.dinnye.backend.service.interfaces.CaseService
import com.dinnye.backend.util.findByIdOrThrow
import com.dinnye.backend.util.update
import org.springframework.stereotype.Service
import org.springframework.transaction.annotation.Isolation
import org.springframework.transaction.annotation.Transactional

@Service
class CaseServiceImpl(
    private val caseRepository: CaseRepository,
    private val jwtService: JwtService,
    private val userService: UserServiceImpl
) : CaseService {
    @Transactional(isolation = Isolation.SERIALIZABLE)
    override fun create(entity: Case): Case = caseRepository.saveAndFlush(entity)

    @Transactional(isolation = Isolation.READ_COMMITTED, readOnly = true)
    override fun get(id: Long): Case = caseRepository.findByIdOrThrow(id)

    @Transactional(isolation = Isolation.READ_COMMITTED, readOnly = true)
    override fun getAll(): List<Case> = caseRepository.findAll()

    @Transactional(isolation = Isolation.READ_COMMITTED, readOnly = true)
    override fun getAll(token: String): List<Case> {
        val email = jwtService.extractEmail(token)
        val user = userService.getByEmail(email)
        return when(user.role) {
            Role.PARENT -> (user as Parent).family?.let { caseRepository.findAllByChildFamilyId(it.id!!) } ?: emptyList()
            Role.DOCTOR -> (user as Doctor).praxis?.let { caseRepository.findAllByPraxisId(it.id!!) } ?: emptyList()
            Role.ASSISTANT -> (user as Assistant).praxis?.let { caseRepository.findAllByPraxisId(it.id!!) } ?: emptyList()
            else -> emptyList()
        }
    }

    @Transactional(isolation = Isolation.READ_COMMITTED, readOnly = true)
    override fun getAllByEmail(email: String): List<Case> {
        val user = userService.getByEmail(email)
        return when(user.role) {
            Role.PARENT -> (user as Parent).family?.let { caseRepository.findAllByChildFamilyId(it.id!!) } ?: emptyList()
            Role.DOCTOR -> (user as Doctor).praxis?.let { caseRepository.findAllByPraxisId(it.id!!) } ?: emptyList()
            Role.ASSISTANT -> (user as Assistant).praxis?.let { caseRepository.findAllByPraxisId(it.id!!) } ?: emptyList()
            else -> emptyList()
        }
    }

    @Suppress("DuplicatedCode")
    @Transactional(isolation = Isolation.SERIALIZABLE)
    override fun update(entity: Case): Case {
        return caseRepository.update(entity.id!!) {
            entity.description?.let { this.description = it }
            entity.child?.let { this.child = it }
            entity.praxis?.let { this.praxis = it }
            entity.appointment?.let { this.appointment = it }
        }
    }

    @Transactional(isolation = Isolation.SERIALIZABLE)
    override fun delete(id: Long) = caseRepository.deleteById(id)
}