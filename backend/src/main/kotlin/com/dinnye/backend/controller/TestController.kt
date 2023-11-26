package com.dinnye.backend.controller

import org.slf4j.Logger
import org.slf4j.LoggerFactory
import org.springframework.core.env.Environment
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RestController

@RestController
class TestController(
    private val environment: Environment
) {

    companion object {
        private val logger: Logger = LoggerFactory.getLogger(TestController::class.java)
    }

    @GetMapping("/test")
    fun test(): ResponseEntity<String> {
        logger.info("Test endpoint called")
        return ResponseEntity.ok("Dinnye Háziorvos: Running | Active profile: ${environment.activeProfiles.firstOrNull() ?: "default"}")
    }
}