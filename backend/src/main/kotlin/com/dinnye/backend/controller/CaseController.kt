package com.dinnye.backend.controller

import com.dinnye.backend.dto._case.CaseGetDto
import com.dinnye.backend.dto._case.CasePostDto
import com.dinnye.backend.dto._case.CasePutDto
import com.dinnye.backend.mapper.CaseMapper
import com.dinnye.backend.service.interfaces.CaseService
import com.dinnye.backend.util.created
import jakarta.validation.Valid
import org.springframework.http.ResponseEntity
import org.springframework.stereotype.Controller
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/api/case")
//@Controller("/api/case")
class CaseController(
    private val caseService: CaseService,
    private val mapper: CaseMapper
) {

    @GetMapping
    fun getAll(): ResponseEntity<List<CaseGetDto>> {
        return ResponseEntity.ok(caseService.getAll().map { mapper.mapToGet(it) })
    }

    @GetMapping("/{id}")
    fun get(@PathVariable id: Long): ResponseEntity<CaseGetDto> {
        return ResponseEntity.ok(mapper.mapToGet(caseService.get(id)))
    }

    @PostMapping
    fun create(@Valid @RequestBody caseDto: CasePostDto): ResponseEntity<Unit> {
        val newCase = mapper.mapFromPost(caseDto)
        val generatedId = caseService.create(newCase).id!!
        return created(generatedId)
    }

    @PutMapping
    fun update(@Valid @RequestBody caseDto: CasePutDto): ResponseEntity<CaseGetDto> {
        val newCase = mapper.mapFromPut(caseDto)
        return ResponseEntity.ok(mapper.mapToGet(caseService.update(newCase)))
    }

    @DeleteMapping("/{id}")
    fun delete(@PathVariable id: Long): ResponseEntity<String> {
        caseService.delete(id)
        return ResponseEntity.ok("Delete was successful")
    }
}