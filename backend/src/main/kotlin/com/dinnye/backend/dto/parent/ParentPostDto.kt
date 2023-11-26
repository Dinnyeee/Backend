package com.dinnye.backend.dto.parent

import com.dinnye.backend.util.Default
import jakarta.validation.constraints.NotEmpty
import java.io.Serializable

data class ParentPostDto @Default constructor (
    @field:NotEmpty val name: String? = null,
    @field:NotEmpty val email: String? = null,
    @field:NotEmpty val password: String? = null,
    val familyId: Long? = null
) : Serializable