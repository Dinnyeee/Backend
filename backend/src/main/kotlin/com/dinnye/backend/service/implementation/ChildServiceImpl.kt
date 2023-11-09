package com.dinnye.backend.service.implementation

import com.dinnye.backend.db.model.Child
import com.dinnye.backend.db.repository.ChildRepository
import com.dinnye.backend.service.interfaces.ChildService
import com.dinnye.backend.util.findByIdOrThrow
import org.springframework.stereotype.Service
import org.springframework.transaction.annotation.Isolation
import org.springframework.transaction.annotation.Transactional

@Service
class ChildServiceImpl(
    private val childRepository: ChildRepository
) : ChildService {

    @Transactional(isolation = Isolation.SERIALIZABLE)
    override fun create(entity: Child): Child {
        return childRepository.saveAndFlush(entity)
    }
    @Transactional(isolation = Isolation.READ_COMMITTED, readOnly = true)
    override fun get(id: Long): Child {
        return childRepository.findByIdOrThrow(id)
    }

    @Transactional(isolation = Isolation.READ_COMMITTED, readOnly = true)
    override fun getAll(): List<Child> {
        return childRepository.findAll()
    }

    @Transactional(isolation = Isolation.SERIALIZABLE)
    override fun update(entity: Child): Child {
        return childRepository.findByIdOrThrow(entity.id!!)
            .apply {
                entity.taj?.let { this.taj = it }
                entity.name?.let { this.name = it }
                entity.nickname?.let { this.nickname = it }
                entity.family?.let { this.family }
            }
            .let {
                childRepository.saveAndFlush(it)
            }
    }

    @Transactional(isolation = Isolation.SERIALIZABLE)
    override fun delete(id: Long) {
        childRepository.deleteById(id)
    }
}