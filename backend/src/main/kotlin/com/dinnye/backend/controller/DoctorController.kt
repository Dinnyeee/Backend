package com.dinnye.backend.controller

import com.dinnye.backend.db.model.Doctor
import com.dinnye.backend.dto.UserInfoDto
import com.dinnye.backend.dto.doctor.DoctorGetDto
import com.dinnye.backend.dto.doctor.DoctorPostDto
import com.dinnye.backend.dto.doctor.DoctorPutDto
import com.dinnye.backend.mapper.DoctorMapper
import com.dinnye.backend.mapper.InfoDtoMapper
import com.dinnye.backend.service.interfaces.DoctorService
import com.dinnye.backend.util.created
import jakarta.validation.Valid
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@RestController
@CrossOrigin("*")
@RequestMapping("/api/doctor")
class DoctorController (
    private val doctorService: DoctorService,
    private val mapper: DoctorMapper
) {

    @GetMapping
    fun getAll(): ResponseEntity<List<DoctorGetDto>> {
        return ResponseEntity.ok(doctorService.getAll().map { mapper.mapToGet(it) })
    }

    @GetMapping("/{id}")
    fun get(@PathVariable id: Long): ResponseEntity<DoctorGetDto> {
        return ResponseEntity.ok(mapper.mapToGet(doctorService.get(id)))
    }

    @PostMapping
    fun create(@Valid @RequestBody doctorPostDto: DoctorPostDto): ResponseEntity<Unit> {
        val newDoctor = mapper.mapFromPost(doctorPostDto)
        val generatedId = doctorService.create(newDoctor).id!!
        return created(generatedId)
    }

    @DeleteMapping("/{id}")
    fun delete(@PathVariable id: Long): ResponseEntity<String> {
        doctorService.delete(id)
        return ResponseEntity.ok("Delete was successful")
    }

    @PutMapping
    fun update(@Valid @RequestBody doctorPutDto: DoctorPutDto): ResponseEntity<DoctorGetDto> {
        val newDoctor = mapper.mapFromPut(doctorPutDto)
        return ResponseEntity.ok(mapper.mapToGet(doctorService.update(newDoctor)))
    }
}