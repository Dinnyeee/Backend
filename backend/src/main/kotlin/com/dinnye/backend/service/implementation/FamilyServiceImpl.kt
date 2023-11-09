package com.dinnye.backend.service.implementation

import com.dinnye.backend.db.model.Family
import com.dinnye.backend.db.repository.FamilyRepository
import com.dinnye.backend.service.interfaces.FamilyService
import com.dinnye.backend.util.findByIdOrThrow
import org.springframework.stereotype.Service
import org.springframework.transaction.annotation.Isolation
import org.springframework.transaction.annotation.Transactional

@Service
class FamilyServiceImpl(
    private val familyRepository: FamilyRepository
) : FamilyService {

    @Transactional(isolation = Isolation.SERIALIZABLE)
    override fun create(entity: Family): Family {
        return familyRepository.saveAndFlush(entity)
    }

    @Transactional(isolation = Isolation.READ_COMMITTED, readOnly = true)
    override fun get(id: Long): Family {
        return familyRepository.findByIdOrThrow(id)
    }

    @Transactional(isolation = Isolation.READ_COMMITTED, readOnly = true)
    override fun getAll(): List<Family> {
        return familyRepository.findAll()
    }

    @Transactional(isolation = Isolation.SERIALIZABLE)
    override fun update(entity: Family): Family {
        return familyRepository.findByIdOrThrow(entity.id!!)
            .apply {
                entity.name?.let { this.name = it }
                entity.parent?.let { this.parent = it }
                entity.praxis?.let { this.praxis = it }
            }
            .let {
                familyRepository.saveAndFlush(it)
            }
    }

    @Transactional(isolation = Isolation.SERIALIZABLE)
    override fun delete(id: Long) {
        familyRepository.deleteById(id)
    }
}