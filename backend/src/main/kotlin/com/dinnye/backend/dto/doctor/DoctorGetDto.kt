package com.dinnye.backend.dto.doctor

import com.dinnye.backend.dto.PraxisInfoDto
import com.dinnye.backend.util.Default
import java.io.Serializable

data class DoctorGetDto @Default constructor (
    val id: Long? = null,
    val name: String? = null,
    val email: String? = null,
    val praxisId: Long? = null
) : Serializable