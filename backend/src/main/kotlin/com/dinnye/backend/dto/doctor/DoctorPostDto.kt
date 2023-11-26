package com.dinnye.backend.dto.doctor

import com.dinnye.backend.dto.PraxisInfoDto
import com.dinnye.backend.util.Default
import jakarta.validation.constraints.NotEmpty
import java.io.Serializable

data class DoctorPostDto @Default constructor(
    @field:NotEmpty val name: String? = null,
    @field:NotEmpty val email: String? = null,
    @field:NotEmpty val password: String? = null,
    val praxisId: Long? = null,
) : Serializable