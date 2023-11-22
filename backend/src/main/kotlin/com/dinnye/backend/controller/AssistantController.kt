package com.dinnye.backend.controller

import com.dinnye.backend.db.model.Assistant
import com.dinnye.backend.dto.UserInfoDto
import com.dinnye.backend.mapper.InfoDtoMapper
import com.dinnye.backend.service.interfaces.AssistantService
import com.dinnye.backend.util.created
import jakarta.validation.Valid
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/api/assistant")
class AssistantController (
    private val assistantService: AssistantService,
    private val mapper: InfoDtoMapper
){

    @GetMapping
    fun getAll(): ResponseEntity<List<UserInfoDto>> {
        return ResponseEntity.ok(assistantService.getAll().map { mapper.map(it) })
    }

    @GetMapping("/{id}")
    fun get(@PathVariable id: Long): ResponseEntity<UserInfoDto> {
        return ResponseEntity.ok(mapper.map(assistantService.get(id)))
    }

    @PostMapping
    fun create(userInfoDto: UserInfoDto): ResponseEntity<Unit> {
        val newAssistant = Assistant()
        mapper.map(userInfoDto, newAssistant)
        val generatedId = assistantService.create(newAssistant).id!!
        return created(generatedId)
    }

    @PutMapping
    fun update(@Valid @RequestBody userInfoDto: UserInfoDto): ResponseEntity<UserInfoDto> {
        val newAssistant = Assistant()
        mapper.map(userInfoDto, newAssistant)
        return ResponseEntity.ok(mapper.map(assistantService.update(newAssistant)))
    }
}