package com.dinnye.backend.service.implementation

import com.dinnye.backend.db.model.Assistant
import com.dinnye.backend.db.model.Praxis
import com.dinnye.backend.db.repository.AssistantRepository
import com.dinnye.backend.service.interfaces.AssistantService
import com.dinnye.backend.service.interfaces.PraxisService
import com.dinnye.backend.service.interfaces.UserService
import com.dinnye.backend.util.findByIdOrThrow
import com.dinnye.backend.util.update
import org.springframework.stereotype.Service
import org.springframework.transaction.annotation.Isolation
import org.springframework.transaction.annotation.Transactional

@Service
class AssistantServiceImpl(
    private val assistantRepository: AssistantRepository,
    private val userService: UserService,
    private val praxisService: PraxisService
): AssistantService {
    @Transactional(isolation = Isolation.SERIALIZABLE)
    override fun create(entity: Assistant): Assistant {
        userService.create(entity) as Assistant

        return entity
    }

    @Transactional(isolation = Isolation.READ_COMMITTED, readOnly = true)
    override fun get(id: Long): Assistant = assistantRepository.findByIdOrThrow(id)

    @Transactional(isolation = Isolation.READ_COMMITTED, readOnly = true)
    override fun getAll(): List<Assistant> = assistantRepository.findAll()

    @Suppress("DuplicatedCode")
    @Transactional(isolation = Isolation.SERIALIZABLE)
    override fun update(entity: Assistant): Assistant {
        return assistantRepository.update(entity.id!!) {
            entity.name?.let { this.name = it }
            entity.pw?.let { this.pw = it }
            entity.email?.let { this.email = it }
            entity.praxis?.let { this.praxis = it }
        }
    }

    @Transactional(isolation = Isolation.SERIALIZABLE)
    override fun delete(id: Long) = assistantRepository.deleteById(id)

    @Transactional(isolation = Isolation.SERIALIZABLE)
    override fun assignPraxis(assistantId: Long, praxisId: Long): Assistant {
        return assistantRepository.update(assistantId) {
            this.praxis = praxisService.get(praxisId)
        }
    }
}