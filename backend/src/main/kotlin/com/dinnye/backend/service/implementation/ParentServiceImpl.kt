package com.dinnye.backend.service.implementation

import com.dinnye.backend.db.model.Child
import com.dinnye.backend.db.model.Family
import com.dinnye.backend.db.model.Parent
import com.dinnye.backend.db.repository.ParentRepository
import com.dinnye.backend.service.interfaces.ChildService
import com.dinnye.backend.service.interfaces.FamilyService
import com.dinnye.backend.service.interfaces.ParentService
import com.dinnye.backend.service.interfaces.UserService
import com.dinnye.backend.util.findByIdOrThrow
import com.dinnye.backend.util.update
import org.springframework.stereotype.Service
import org.springframework.transaction.annotation.Isolation
import org.springframework.transaction.annotation.Transactional

@Service
class ParentServiceImpl(
    private val parentRepository: ParentRepository,
    private val userService: UserService,
    private val jwtService: JwtService,
    private val familyService: FamilyService,
    private val childService: ChildService
): ParentService {
    @Transactional(isolation = Isolation.SERIALIZABLE)
    override fun create(entity: Parent): Parent {
        if (entity.family == null) {
            entity.family = Family().apply {
                this.name = "${entity.name}'s family"
                this.parent = entity
            }
        }
        userService.create(entity) as Parent
        return entity
    }

    @Transactional(isolation = Isolation.READ_COMMITTED, readOnly = true)
    override fun get(id: Long) = parentRepository.findByIdOrThrow(id)

    @Transactional(isolation = Isolation.READ_COMMITTED, readOnly = true)
    override fun getAll(): List<Parent> = parentRepository.findAll()

    @Suppress("DuplicatedCode")
    @Transactional(isolation = Isolation.SERIALIZABLE)
    override fun update(entity: Parent): Parent {
        return parentRepository.update(entity.id!!) {
            entity.name?.let { this.name = it }
            entity.pw?.let { this.pw = it }
            entity.email?.let { this.email = it }
            entity.family?.let { this.family = it }
        }
    }

    @Transactional(isolation = Isolation.SERIALIZABLE)
    override fun delete(id: Long) = parentRepository.deleteById(id)

    @Transactional(isolation = Isolation.SERIALIZABLE)
    override fun assignFamily(parentId: Long, familyId: Long): Parent {
        return parentRepository.update(parentId) {
            this.family = familyService.get(familyId)
        }
    }

    @Transactional(isolation = Isolation.SERIALIZABLE)
    override fun addChild(email: String, child: Child): Parent {
        val parentId = userService.getByEmail(email).id!!
        return parentRepository.update(parentId) {
            this.family?.children?.add(child)
        }
    }
}