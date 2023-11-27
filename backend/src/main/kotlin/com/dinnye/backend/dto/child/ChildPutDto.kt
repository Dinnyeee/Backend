package com.dinnye.backend.dto.child

import com.dinnye.backend.util.Default
import jakarta.validation.constraints.NotEmpty
import jakarta.validation.constraints.NotNull
import jakarta.validation.constraints.Past
import java.io.Serializable
import java.util.*

data class ChildPutDto @Default constructor (
    @field:NotNull val id: Long? = null,
    @field:NotEmpty val taj: String? = null,
    @field:NotEmpty val name: String? = null,
    @field:NotEmpty val nickname: String? = null,
    @field:Past val birthday: Date? = null,
    @field:NotNull val familyId: Long? = null,
) : Serializable