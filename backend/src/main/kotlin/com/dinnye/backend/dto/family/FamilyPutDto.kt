package com.dinnye.backend.dto.family

import com.dinnye.backend.util.Default
import jakarta.validation.constraints.NotEmpty
import jakarta.validation.constraints.NotNull
import java.io.Serializable

data class FamilyPutDto @Default constructor (
    @field:NotNull val id: Long? = null,
    @field:NotEmpty val name: String? = null,
    @field:NotNull val parentId: Long? = null,
    val praxisId: Long? = null
) : Serializable