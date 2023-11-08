package com.dinnye.backend.dto.child

import jakarta.validation.constraints.NotEmpty
import jakarta.validation.constraints.NotNull
import java.io.Serializable

data class ChildPutDto(
    @field:NotNull val id: Long? = null,
    @field:NotEmpty val taj: String? = null,
    @field:NotEmpty val name: String? = null,
    @field:NotEmpty val nickname: String? = null,
    @field:NotNull val familyId: Long? = null,
    val caseIds: List<Long> = emptyList()
) : Serializable