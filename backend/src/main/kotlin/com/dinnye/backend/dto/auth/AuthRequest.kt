package com.dinnye.backend.dto.auth

import jakarta.validation.constraints.Email
import jakarta.validation.constraints.NotBlank

data class AuthRequest (
    @field:NotBlank private var email: String? = null,
    @field:NotBlank private var password: String? = null
)