package com.dinnye.backend.dto.auth

import com.dinnye.backend.util.Default
import jakarta.validation.constraints.NotBlank
import java.io.Serializable

data class LoginDto @Default constructor(
    @field:NotBlank var email: String? = null,
    @field:NotBlank var password: String? = null
) : Serializable