package com.dinnye.backend.service.implementation

import com.dinnye.backend.db.model.Doctor
import com.dinnye.backend.db.model.Praxis
import com.dinnye.backend.db.repository.DoctorRepository
import com.dinnye.backend.service.interfaces.DoctorService
import com.dinnye.backend.service.interfaces.PraxisService
import com.dinnye.backend.service.interfaces.UserService
import com.dinnye.backend.util.findByIdOrThrow
import org.springframework.stereotype.Service


@Service
class DoctorServiceImpl(
    private val doctorRepository: DoctorRepository,
    private val userService: UserService,
    private val praxisService: PraxisService
) : DoctorService {
    override fun create(entity: Doctor): Doctor {
        if (entity.praxis == null) {
            entity.praxis = Praxis().apply {
                this.name = "${entity.name}'s praxis"
                this.doctor = entity
            }.also {
                praxisService.create(it)
            }
        }
        return userService.create(entity) as Doctor
    }

    override fun get(id: Long): Doctor {
        return doctorRepository.findByIdOrThrow(id)
    }

    override fun getAll(): List<Doctor> {
        return doctorRepository.findAll()
    }

    override fun update(entity: Doctor): Doctor {

        //TODO implement copy for every baseEntity

        return doctorRepository.findByIdOrThrow(entity.id!!)
            .apply {
                entity.name?.let { this.name = it }
                entity.password?.let { this.password = it }
                entity.email?.let { this.email = it }
            }
    }

    override fun delete(id: Long) {
        TODO("Not yet implemented")
    }

    override fun assignPraxis(praxisId: Long): Doctor {
        TODO("Not yet implemented")
    }
}