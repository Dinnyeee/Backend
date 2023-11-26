package com.dinnye.backend.dto.auth

import com.dinnye.backend.util.Default
import jakarta.validation.constraints.NotBlank
import java.io.Serializable

data class RegisterDto @Default constructor(
    @field:NotBlank var name: String? = null,
    @field:NotBlank var email: String? = null,
    @field:NotBlank var password: String? = null,
    @field:NotBlank var role: String? = null
) : Serializable