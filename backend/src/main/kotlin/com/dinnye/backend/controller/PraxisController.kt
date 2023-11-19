package com.dinnye.backend.controller

import com.dinnye.backend.dto.praxis.PraxisGetDto
import com.dinnye.backend.mapper.PraxisMapper
import com.dinnye.backend.service.interfaces.PraxisService
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.GetMapping
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
}