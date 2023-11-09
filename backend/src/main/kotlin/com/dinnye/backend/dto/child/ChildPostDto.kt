package com.dinnye.backend.dto.child

import com.dinnye.backend.util.Default
import jakarta.validation.constraints.NotBlank
import jakarta.validation.constraints.NotNull
import java.io.Serializable

data class ChildPostDto @Default constructor (
    @field:NotBlank val taj: String? = null,
    @field:NotBlank val name: String? = null,
    @field:NotBlank val nickname: String? = null,
    @field:NotNull val familyId: Long? = null
) : Serializable