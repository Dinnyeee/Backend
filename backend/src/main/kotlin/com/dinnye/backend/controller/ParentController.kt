package com.dinnye.backend.controller

import com.dinnye.backend.db.model.Parent
import com.dinnye.backend.dto.UserInfoDto
import com.dinnye.backend.mapper.InfoDtoMapper
import com.dinnye.backend.service.interfaces.ParentService
import com.dinnye.backend.util.created
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/api/parent")
class ParentController (
    private val parentService: ParentService,
    private val mapper:InfoDtoMapper
){

    @GetMapping
    fun getAll(): ResponseEntity<List<UserInfoDto>> {
        return ResponseEntity.ok(parentService.getAll().map { mapper.map(it) })
    }

    @GetMapping("/{id}")
    fun get(@PathVariable id: Long): ResponseEntity<UserInfoDto> {
        return ResponseEntity.ok(mapper.map(parentService.get(id)))
    }

    @PostMapping
    fun create(userInfoDto: UserInfoDto): ResponseEntity<Unit> {
        val newParent = Parent()
        mapper.map(userInfoDto, newParent)
        val generatedId = parentService.create(newParent).id!!
        return created(generatedId)
    }

    @PutMapping
    fun update(userInfoDto: UserInfoDto): ResponseEntity<UserInfoDto> {
        val newParent = Parent()
        mapper.map(userInfoDto, newParent)
        return ResponseEntity.ok(mapper.map(parentService.update(newParent)))
    }
}
