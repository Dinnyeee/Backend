package com.dinnye.backend.controller

import com.dinnye.backend.dto.family.FamilyGetDto
import com.dinnye.backend.dto.family.FamilyPostDto
import com.dinnye.backend.dto.family.FamilyPutDto
import com.dinnye.backend.mapper.FamilyMapper
import com.dinnye.backend.service.interfaces.FamilyService
import com.dinnye.backend.util.created
import jakarta.validation.Valid
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/api/family")
class FamilyController (
    private val familyService: FamilyService,
    private val mapper: FamilyMapper
) {

    @GetMapping
    fun getAll(): ResponseEntity<List<FamilyGetDto>> {
        return ResponseEntity.ok(familyService.getAll().map { mapper.mapToGet(it) })
    }

    @GetMapping("/{id}")
    fun get(@PathVariable id: Long): ResponseEntity<FamilyGetDto> {
        return ResponseEntity.ok(mapper.mapToGet(familyService.get(id)))
    }

    @PostMapping
    fun create(@Valid @RequestBody familyPostDto: FamilyPostDto): ResponseEntity<Unit> {
        val newFamily = mapper.mapFromPost(familyPostDto)
        val generatedId = familyService.create(newFamily).id!!
        return created(generatedId)
    }

    @DeleteMapping("/{id}")
    fun delete(@PathVariable id: Long): ResponseEntity<String> {
        familyService.delete(id)
        return ResponseEntity.ok("Delete was successful")
    }

    @PutMapping("/{id}")
    fun update(@PathVariable id: Long, @Valid @RequestBody familyPutDto: FamilyPutDto): ResponseEntity<FamilyGetDto> {
        val newFamily = mapper.mapFromPut(familyPutDto)
        return ResponseEntity.ok(mapper.mapToGet(familyService.update(newFamily)))
    }
}