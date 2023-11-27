package com.dinnye.backend.controller

import com.dinnye.backend.dto.child.ChildGetDto
import com.dinnye.backend.dto.child.ChildPostDto
import com.dinnye.backend.dto.child.ChildPutDto
import com.dinnye.backend.mapper.ChildMapper
import com.dinnye.backend.service.interfaces.ChildService
import com.dinnye.backend.util.asUser
import com.dinnye.backend.util.created
import jakarta.validation.Valid
import org.springframework.http.ResponseEntity
import org.springframework.security.core.Authentication
import org.springframework.web.bind.annotation.*

@RestController
@CrossOrigin("*")
@RequestMapping("/api/child")
class ChildController (
    private val childService: ChildService,
    private val mapper: ChildMapper
){

    @GetMapping
    fun getAll(auth: Authentication): ResponseEntity<List<ChildGetDto>> {
        auth?.asUser()?.let { user ->
            return ResponseEntity.ok(childService.getAllByEmail(user.email ?: "")
                .map { mapper.mapToGet(it) })
        } ?: return ResponseEntity.ok(listOf())
    }

    @GetMapping("/{id}")
    fun get(@PathVariable id: Long): ResponseEntity<ChildGetDto> {
        return ResponseEntity.ok(mapper.mapToGet(childService.get(id)))
    }

    @DeleteMapping("/{id}")
    fun delete(@PathVariable id: Long): ResponseEntity<String> {
        childService.delete(id)
        return ResponseEntity.ok("Delete was successful")
    }

    @PostMapping
    fun create(@Valid @RequestBody childPostDto: ChildPostDto): ResponseEntity<Unit> {
        val newChild = mapper.mapFromPost(childPostDto)
        val generatedId = childService.create(newChild).id!!
        return created(generatedId)
    }

    @PutMapping("/{id}")
    fun update(@PathVariable id: Long, @Valid @RequestBody childPutDto: ChildPutDto): ResponseEntity<ChildGetDto> {
        val newChild = mapper.mapFromPut(childPutDto)
        return ResponseEntity.ok(mapper.mapToGet(childService.update(newChild)))
    }
}