package com.dinnye.backend.dto.message

import com.dinnye.backend.util.Default
import jakarta.validation.constraints.NotBlank
import jakarta.validation.constraints.NotNull

data class MessagePostDto @Default constructor(
    @field:NotNull val userId: Long? = null,
    @field:NotNull val caseId: Long? = null,
    @field:NotBlank val message: String = ""
)
