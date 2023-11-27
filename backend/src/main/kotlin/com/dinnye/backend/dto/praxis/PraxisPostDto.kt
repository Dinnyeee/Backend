package com.dinnye.backend.dto.praxis

import com.dinnye.backend.util.Default
import jakarta.validation.constraints.NotBlank
import jakarta.validation.constraints.NotNull
import java.io.Serializable

data class PraxisPostDto @Default constructor (
    @field:NotBlank val name: String? = null,
    @field:NotNull val doctorId: Long? = null,
    @field:NotNull val assistantId: Long? = null
) : Serializable