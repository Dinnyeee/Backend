package com.dinnye.backend.dto.praxis

import jakarta.validation.constraints.NotEmpty
import org.jetbrains.annotations.NotNull
import java.io.Serializable

data class PraxisPutDto(
    @field:NotNull val id: Long? = null,
    @field:NotEmpty val name: String? = null,
    @field:NotNull val doctorId: Long? = null,
    @field:NotNull val assistantId: Long? = null
) : Serializable