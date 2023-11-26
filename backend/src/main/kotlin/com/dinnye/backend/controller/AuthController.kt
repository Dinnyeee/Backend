package com.dinnye.backend.controller

import com.dinnye.backend.dto.auth.AuthResponse
import com.dinnye.backend.dto.auth.LoginDto
import com.dinnye.backend.service.implementation.AuthService
import jakarta.validation.Valid
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/auth")
class AuthController (
    private val authService: AuthService
) {

        @PostMapping("/login")
        fun login(@Valid @RequestBody loginDto: LoginDto): ResponseEntity<AuthResponse> {
            return ResponseEntity.ok(authService.login(loginDto))
        }

        /*@PostMapping("/register")
        fun register(@Valid @RequestBody registerDto: RegisterDto): ResponseEntity<UserInfoDto> {
            val user = authService.register(registerDto.email, registerDto.password, registerDto.name)
            return created(InfoDtoMapper.map(user))
        }*/
}