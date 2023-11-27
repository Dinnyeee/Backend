package com.dinnye.backend.controller

import com.dinnye.backend.db.model.Assistant
import com.dinnye.backend.dto.UserInfoDto
import com.dinnye.backend.dto.assistent.AssistantGetDto
import com.dinnye.backend.dto.assistent.AssistantPostDto
import com.dinnye.backend.dto.assistent.AssistantPutDto
import com.dinnye.backend.mapper.AssistantMapper
import com.dinnye.backend.mapper.InfoDtoMapper
import com.dinnye.backend.service.interfaces.AssistantService
import com.dinnye.backend.util.created
import jakarta.validation.Valid
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@RestController
@CrossOrigin("*")
@RequestMapping("/api/assistant")
class AssistantController (
    private val assistantService: AssistantService,
    private val mapper: AssistantMapper
){

    @GetMapping
    fun getAll(): ResponseEntity<List<AssistantGetDto>> {
        return ResponseEntity.ok(assistantService.getAll().map { mapper.mapToGet(it) })
    }

    @GetMapping("/{id}")
    fun get(@PathVariable id: Long): ResponseEntity<AssistantGetDto> {
        return ResponseEntity.ok(mapper.mapToGet(assistantService.get(id)))
    }

    @PostMapping
    fun create(@Valid @RequestBody assistantPostDto: AssistantPostDto): ResponseEntity<Unit> {
        val newAssistant = mapper.mapFromPost(assistantPostDto)
        val generatedId = assistantService.create(newAssistant).id!!
        return created(generatedId)
    }

    @PutMapping
    fun update(@Valid @RequestBody assistantPutDto: AssistantPutDto): ResponseEntity<AssistantGetDto> {
        val newAssistant = mapper.mapFromPut(assistantPutDto)
        return ResponseEntity.ok(mapper.mapToGet(assistantService.update(newAssistant)))
    }

    @DeleteMapping("/{id}")
    fun delete(@PathVariable id: Long): ResponseEntity<String> {
        assistantService.delete(id)
        return ResponseEntity.ok("Delete was successful")
    }
}