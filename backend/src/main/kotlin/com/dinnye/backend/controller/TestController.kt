package com.dinnye.backend.controller

import org.springframework.core.env.Environment
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RestController

@RestController
class TestController(
    private val environment: Environment
) {

    @GetMapping("/test")
    fun test(): ResponseEntity<String> {
        return ResponseEntity.ok("Dinnye Háziorvos: Running | Active profile: ${environment.activeProfiles.firstOrNull() ?: "default"}")
    }
}