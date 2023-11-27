package com.dinnye.backend.service.implementation

import com.dinnye.backend.db.model.*
import com.dinnye.backend.db.repository.ChildRepository
import com.dinnye.backend.service.interfaces.ChildService
import com.dinnye.backend.util.findByIdOrThrow
import com.dinnye.backend.util.update
import org.springframework.stereotype.Service
import org.springframework.transaction.annotation.Isolation
import org.springframework.transaction.annotation.Transactional

@Service
class ChildServiceImpl(
    private val childRepository: ChildRepository,
    private val userService: UserServiceImpl
) : ChildService {

    @Transactional(isolation = Isolation.SERIALIZABLE)
    override fun create(entity: Child): Child = childRepository.saveAndFlush(entity)
    @Transactional(isolation = Isolation.READ_COMMITTED, readOnly = true)
    override fun get(id: Long): Child = childRepository.findByIdOrThrow(id)

    @Transactional(isolation = Isolation.READ_COMMITTED, readOnly = true)
    override fun getAll(): List<Child> = childRepository.findAll()

    @Transactional(isolation = Isolation.READ_COMMITTED, readOnly = true)
    override fun getAllByEmail(email: String): List<Child> {
        val user = userService.getByEmail(email)
        return (user as Parent).family?.let{ childRepository.findAllByFamilyId(it.id!!) } ?: emptyList()
    }

    @Transactional(isolation = Isolation.SERIALIZABLE)
    override fun update(entity: Child): Child {
        return childRepository.update(entity.id!!) {
            entity.taj?.let { this.taj = it }
            entity.name?.let { this.name = it }
            entity.nickname?.let { this.nickname = it }
            entity.family?.let { this.family }
        }
    }

    @Transactional(isolation = Isolation.SERIALIZABLE)
    override fun delete(id: Long) = childRepository.deleteById(id)
}