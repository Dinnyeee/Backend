package com.dinnye.backend.service.implementation

import com.dinnye.backend.db.model.Case
import com.dinnye.backend.db.repository.CaseRepository
import com.dinnye.backend.service.interfaces.CaseService
import com.dinnye.backend.util.findByIdOrThrow
import org.springframework.stereotype.Service
import org.springframework.transaction.annotation.Isolation
import org.springframework.transaction.annotation.Transactional

@Service
class CaseServiceImpl(
    private val caseRepository: CaseRepository
) : CaseService {
    @Transactional(isolation = Isolation.SERIALIZABLE)
    override fun create(entity: Case): Case {
        return caseRepository.saveAndFlush(entity)
    }

    @Transactional(isolation = Isolation.READ_COMMITTED, readOnly = true)
    override fun get(id: Long): Case {
        return caseRepository.findByIdOrThrow(id)
    }

    @Transactional(isolation = Isolation.READ_COMMITTED, readOnly = true)
    override fun getAll(): List<Case> {
        return caseRepository.findAll();
    }

    @Transactional(isolation = Isolation.SERIALIZABLE)
    override fun update(entity: Case): Case {
        return caseRepository.findByIdOrThrow(entity.id!!)
            .apply {
                entity.description?.let { this.description = it }
                entity.child?.let { this.child = it }
                entity.praxis?.let { this.praxis = it }
                entity.appointment?.let { this.appointment = it }
            }
            .let {
                caseRepository.saveAndFlush(it)
            }
    }

    @Transactional(isolation = Isolation.SERIALIZABLE)
    override fun delete(id: Long) {
        caseRepository.deleteById(id)
    }
}