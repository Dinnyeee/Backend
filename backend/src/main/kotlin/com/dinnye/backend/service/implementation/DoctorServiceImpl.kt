package com.dinnye.backend.service.implementation

import com.dinnye.backend.db.model.Doctor
import com.dinnye.backend.db.model.Praxis
import com.dinnye.backend.db.repository.DoctorRepository
import com.dinnye.backend.service.interfaces.DoctorService
import com.dinnye.backend.service.interfaces.PraxisService
import com.dinnye.backend.service.interfaces.UserService
import com.dinnye.backend.util.findByIdOrThrow
import com.dinnye.backend.util.update
import org.springframework.stereotype.Service
import org.springframework.transaction.annotation.Isolation
import org.springframework.transaction.annotation.Transactional


@Service
class DoctorServiceImpl(
    private val doctorRepository: DoctorRepository,
    private val userService: UserService,
    private val praxisService: PraxisService
) : DoctorService {

    @Transactional(isolation = Isolation.SERIALIZABLE)
    override fun create(entity: Doctor): Doctor {
        userService.create(entity) as Doctor //Ha ez a returnben van akkor TransientPropertyValueException-t dob
        if (entity.praxis == null) {
            entity.praxis = Praxis().apply {
                this.name = "${entity.name}'s praxis"
                this.doctor = entity
            }.also {
                praxisService.create(it)
            }
        }
        return entity
    }

    @Transactional(isolation = Isolation.READ_COMMITTED, readOnly = true)
    override fun get(id: Long): Doctor = doctorRepository.findByIdOrThrow(id)

    @Transactional(isolation = Isolation.READ_COMMITTED, readOnly = true)
    override fun getAll(): List<Doctor> = doctorRepository.findAll()

    @Suppress("DuplicatedCode")
    @Transactional(isolation = Isolation.SERIALIZABLE)
    override fun update(entity: Doctor): Doctor {
        return doctorRepository.update(entity.id!!) {
            entity.name?.let { this.name = it }
            entity.password?.let { this.password = it }
            entity.email?.let { this.email = it }
            entity.praxis?.let { this.praxis = it }
        }
    }

    @Transactional(isolation = Isolation.SERIALIZABLE)
    override fun delete(id: Long) = doctorRepository.deleteById(id)

    @Transactional(isolation = Isolation.SERIALIZABLE)
    override fun assignPraxis(doctorId: Long, praxisId: Long): Doctor {
        return doctorRepository.update(doctorId) {
            this.praxis = praxisService.get(praxisId)
        }
    }
}