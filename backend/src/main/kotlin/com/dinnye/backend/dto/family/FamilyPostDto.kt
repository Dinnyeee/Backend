package com.dinnye.backend.dto.family

import com.dinnye.backend.util.Default
import jakarta.validation.constraints.NotBlank
import jakarta.validation.constraints.NotNull
import java.io.Serializable

data class FamilyPostDto @Default constructor(
    @field:NotBlank val name: String? = null,
    @field:NotNull val parentId: Long? = null,
    val praxisId: Long? = null
) : Serializable