package com.dinnye.backend.controller

import com.dinnye.backend.dto.child.ChildPostDto
import com.dinnye.backend.dto.parent.ParentGetDto
import com.dinnye.backend.dto.parent.ParentPostDto
import com.dinnye.backend.dto.parent.ParentPutDto
import com.dinnye.backend.mapper.ChildMapper
import com.dinnye.backend.mapper.ParentMapper
import com.dinnye.backend.service.interfaces.ParentService
import com.dinnye.backend.util.asUser
import com.dinnye.backend.util.created
import jakarta.validation.Valid
import org.springframework.http.ResponseEntity
import org.springframework.security.core.Authentication
import org.springframework.web.bind.annotation.CrossOrigin
import org.springframework.web.bind.annotation.DeleteMapping
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.PutMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@CrossOrigin("*")
@RequestMapping("/api/parent")
class ParentController (
    private val parentService: ParentService,
    private val mapper: ParentMapper,
    private val childMapper: ChildMapper
){

    @GetMapping
    fun getAll(): ResponseEntity<List<ParentGetDto>> {
        return ResponseEntity.ok(parentService.getAll().map { mapper.mapToGet(it) })
    }

    @GetMapping("/{id}")
    fun get(@PathVariable id: Long): ResponseEntity<ParentGetDto> {
        return ResponseEntity.ok(mapper.mapToGet(parentService.get(id)))
    }

    @PostMapping
    fun create(@Valid @RequestBody parentPostDto: ParentPostDto): ResponseEntity<Unit> {
        val newParent = mapper.mapFromPost(parentPostDto)
        val generatedId = parentService.create(newParent).id!!
        return created(generatedId)
    }

    @PutMapping
    fun update(@Valid @RequestBody parentPutDto: ParentPutDto): ResponseEntity<ParentGetDto> {
        val newParent = mapper.mapFromPut(parentPutDto)
        return ResponseEntity.ok(mapper.mapToGet(parentService.update(newParent)))
    }

    @DeleteMapping("/{id}")
    fun delete(@PathVariable id: Long): ResponseEntity<Unit> {
        parentService.delete(id)
        return ResponseEntity.noContent().build()
    }

    @PutMapping("/addChild")
    fun addChild(auth: Authentication?, @Valid @RequestBody childDto: ChildPostDto): ResponseEntity<ParentGetDto> {
        return ResponseEntity.ok(
            auth?.asUser()?.let {
                mapper.mapToGet(parentService.addChild(it.email ?: "", childMapper.mapFromPost(childDto)))
            }
        )
    }
}
