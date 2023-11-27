package com.dinnye.backend.dto.parent

import com.dinnye.backend.util.Default
import jakarta.validation.constraints.NotEmpty
import jakarta.validation.constraints.NotNull
import java.io.Serializable

data class ParentPutDto @Default constructor(
    @field:NotNull val id: Long? = null,
    @field:NotEmpty val name: String? = null,
    @field:NotEmpty val email: String? = null,
    @field:NotEmpty val password: String? = null,
    @field:NotNull val familyId: Long? = null
) : Serializable