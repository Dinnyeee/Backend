package com.dinnye.backend.controller

import com.dinnye.backend.dto.auth.AuthResponse
import com.dinnye.backend.dto.auth.LoginDto
import com.dinnye.backend.dto.auth.RegisterDto
import com.dinnye.backend.service.implementation.AuthService
import jakarta.validation.Valid
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController
import org.slf4j.Logger
import org.slf4j.LoggerFactory

@RestController
@RequestMapping("/auth")
class AuthController (
    private val authService: AuthService
) {

        companion object{
            private val logger: Logger = LoggerFactory.getLogger(AuthController::class.java)
        }
        @PostMapping("/login")
        fun login(@Valid @RequestBody loginDto: LoginDto): ResponseEntity<AuthResponse> {
            logger.info("Login attempt with email: ${loginDto.email}")
            return ResponseEntity.ok(authService.login(loginDto))
        }

        @PostMapping("/register")
        fun register(@Valid @RequestBody registerDto: RegisterDto): ResponseEntity<AuthResponse> {
            return ResponseEntity.ok(authService.register(registerDto))
        }
}