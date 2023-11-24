package com.dinnye.backend.dto.assistent

import com.dinnye.backend.util.Default
import jakarta.validation.constraints.NotBlank
import jakarta.validation.constraints.NotNull
import java.io.Serializable

data class AssistantPostDto @Default constructor(
    @field:NotBlank val name: String?,
    @field:NotBlank val email: String?,
    @field:NotBlank val password: String?,
    val praxisId: Long?
) : Serializable