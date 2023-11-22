package com.dinnye.backend.controller

import com.dinnye.backend.db.model.Doctor
import com.dinnye.backend.dto.UserInfoDto
import com.dinnye.backend.mapper.InfoDtoMapper
import com.dinnye.backend.service.interfaces.DoctorService
import com.dinnye.backend.util.created
import jakarta.validation.Valid
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/api/doctor")
class DoctorController (
    private val doctorService: DoctorService,
    private val mapper: InfoDtoMapper
) {

    @GetMapping
    fun getAll(): ResponseEntity<List<UserInfoDto>> {
        return ResponseEntity.ok(doctorService.getAll().map { mapper.map(it) })
    }

    @GetMapping("/{id}")
    fun get(@PathVariable id: Long): ResponseEntity<UserInfoDto> {
        return ResponseEntity.ok(mapper.map(doctorService.get(id)))
    }

    @PostMapping
    fun create(@Valid @RequestBody userInfoDto: UserInfoDto): ResponseEntity<Unit> {
        val newDoctor = Doctor()
        mapper.map(userInfoDto, newDoctor)
        val generatedId = doctorService.create(newDoctor).id!!
        return created(generatedId)
    }

    @DeleteMapping("/{id}")
    fun delete(@PathVariable id: Long): ResponseEntity<String> {
        doctorService.delete(id)
        return ResponseEntity.ok("Delete was successful")
    }

    @PutMapping("/{id}")
    fun update(@PathVariable id: Long, userInfoDto: UserInfoDto): ResponseEntity<UserInfoDto> {
        val newDoctor = Doctor()
        mapper.map(userInfoDto, newDoctor)
        return ResponseEntity.ok(mapper.map(doctorService.update(newDoctor)))
    }
}