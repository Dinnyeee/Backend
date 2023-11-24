package com.dinnye.backend.dto.doctor

import com.dinnye.backend.dto.PraxisInfoDto
import com.dinnye.backend.util.Default
import jakarta.validation.constraints.NotEmpty
import jakarta.validation.constraints.NotNull
import java.io.Serializable

data class DoctorPutDto @Default constructor(
    @field:NotNull val id: Long? = null,
    @field:NotEmpty val name: String? = null,
    @field:NotEmpty val email: String? = null,
    @field:NotEmpty val password: String? = null,
    @field:NotNull val praxisId: Long? = null,
) : Serializable