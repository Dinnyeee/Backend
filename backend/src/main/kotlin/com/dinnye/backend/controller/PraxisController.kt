package com.dinnye.backend.controller

import com.dinnye.backend.dto.praxis.PraxisGetDto
import com.dinnye.backend.dto.praxis.PraxisPostDto
import com.dinnye.backend.dto.praxis.PraxisPutDto
import com.dinnye.backend.mapper.PraxisMapper
import com.dinnye.backend.service.interfaces.PraxisService
import com.dinnye.backend.util.created
import jakarta.validation.Valid
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.DeleteMapping
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.PutMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestHeader
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/api/praxis")
class PraxisController(
    private val praxisService: PraxisService,
    private val mapper: PraxisMapper
) {

    @GetMapping
    fun getAll(): ResponseEntity<List<PraxisGetDto>> {
        return ResponseEntity.ok(praxisService.getAll().map { mapper.mapToGet(it) })
    }

    @GetMapping("/{id}")
    fun get(@PathVariable id: Long): ResponseEntity<PraxisGetDto> {
        return ResponseEntity.ok(mapper.mapToGet(praxisService.get(id)))
    }

    @PostMapping
    fun create(@Valid @RequestBody praxisDto: PraxisPostDto): ResponseEntity<Unit> {
        val newPraxis = mapper.mapFromPost(praxisDto)
        val generatedId = praxisService.create(newPraxis).id!!
        return created(generatedId)
    }

    @PutMapping
    fun update(@Valid @RequestBody praxisDto: PraxisPutDto): ResponseEntity<PraxisGetDto> {
        val newPraxis = mapper.mapFromPut(praxisDto)
        return ResponseEntity.ok(mapper.mapToGet(praxisService.update(newPraxis)))
    }

    @DeleteMapping("/{id}")
    fun delete(@PathVariable id: Long): ResponseEntity<String> {
        praxisService.delete(id)
        return ResponseEntity.ok("Delete was successful")
    }

    @PostMapping("/removeFamily/{familyId}")
    fun removeFamily(@RequestHeader token: String, @PathVariable familyId: Long): ResponseEntity<String> {
        praxisService.removeFamily(token, familyId)
        return ResponseEntity.ok("Removal of $familyId family was successful")
    }

    @PostMapping("/addFamily/{familyId}")
    fun addFamily(@RequestHeader token: String, @PathVariable familyId: Long): ResponseEntity<String> {
        praxisService.addFamily(token, familyId)
        return ResponseEntity.ok("$familyId family was successfully added")
    }
}