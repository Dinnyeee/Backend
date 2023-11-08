package com.dinnye.backend.dto.family

import jakarta.validation.constraints.NotEmpty
import jakarta.validation.constraints.NotNull
import java.io.Serializable

data class FamilyPutDto(
    @field:NotNull val id: Long? = null,
    @field:NotEmpty val name: String? = null,
    @field:NotNull val parentId: Long? = null,
    val childIds: MutableList<Long>?,
    val praxisId: Long? = null
) : Serializable