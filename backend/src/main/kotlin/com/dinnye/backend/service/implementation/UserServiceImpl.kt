package com.dinnye.backend.service.implementation

import com.dinnye.backend.db.model.Assistant
import com.dinnye.backend.db.model.Doctor
import com.dinnye.backend.db.model.Parent
import com.dinnye.backend.db.model.User
import com.dinnye.backend.db.repository.UserRepository
import com.dinnye.backend.service.interfaces.UserService
import com.dinnye.backend.util.findByIdOrThrow
import com.dinnye.backend.util.throwWhenNotFound
import com.dinnye.backend.util.update
import org.springframework.stereotype.Service
import org.springframework.transaction.annotation.Isolation
import org.springframework.transaction.annotation.Transactional

@Service
class UserServiceImpl(
    private val userRepository: UserRepository
): UserService {

    @Transactional(isolation = Isolation.SERIALIZABLE)
    override fun create(entity: User): User = userRepository.saveAndFlush(entity)

    @Transactional(isolation = Isolation.READ_COMMITTED, readOnly = true)
    override fun get(id: Long): User = userRepository.findByIdOrThrow(id)

    @Transactional(isolation = Isolation.READ_COMMITTED, readOnly = true)
    override fun getAll(): List<User> = userRepository.findAll()

    @Suppress("DuplicatedCode")
    @Transactional(isolation = Isolation.SERIALIZABLE)
    override fun update(entity: User): User {
        return userRepository.update(entity.id!!) {
            entity.name?.let { this.name = it }
            entity.pw?.let { this.pw = it }
            entity.email?.let { this.email = it }
        }
    }

    @Transactional(isolation = Isolation.SERIALIZABLE)
    override fun delete(id: Long) = userRepository.deleteById(id)

    @Transactional(isolation = Isolation.READ_COMMITTED, readOnly = true)
    override fun findAssistantById(id: Long): Assistant = userRepository.findAssistantById(id).throwWhenNotFound(id)

    @Transactional(isolation = Isolation.READ_COMMITTED, readOnly = true)
    override fun findDoctorById(id: Long): Doctor = userRepository.findDoctorById(id).throwWhenNotFound(id)

    @Transactional(isolation = Isolation.READ_COMMITTED, readOnly = true)
    override fun findParentById(id: Long): Parent = userRepository.findParentById(id).throwWhenNotFound(id)
}