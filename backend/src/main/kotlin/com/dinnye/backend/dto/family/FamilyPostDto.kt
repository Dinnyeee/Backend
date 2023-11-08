package com.dinnye.backend.dto.family

import jakarta.validation.constraints.NotBlank
import jakarta.validation.constraints.NotNull
import java.io.Serializable

data class FamilyPostDto(
    @field:NotBlank val name: String? = null,
    @field:NotNull val parentId: Long? = null,
    val childIds: List<Long> = emptyList(),
    val praxisId: Long? = null
) : Serializable