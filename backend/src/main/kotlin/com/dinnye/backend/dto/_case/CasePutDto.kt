package com.dinnye.backend.dto._case

import com.dinnye.backend.util.Default
import jakarta.validation.constraints.FutureOrPresent
import jakarta.validation.constraints.NotBlank
import jakarta.validation.constraints.NotNull
import java.io.Serializable
import java.util.*

data class CasePutDto @Default constructor(
    @field:NotNull val id: Long? = null,
    @field:NotBlank val description: String? = null,
    @field:NotNull val praxisId: Long? = null,
    @field:NotNull val childId: Long? = null,
    @field:FutureOrPresent val appointmentDate: Date? = null
) : Serializable