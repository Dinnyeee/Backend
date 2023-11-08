package com.dinnye.backend.dto.child

import com.dinnye.backend.dto.ChildInfoDto
import com.dinnye.backend.dto.FamilyInfoDto
import java.io.Serializable
import java.util.*

data class ChildGetDto(
    val id: Long? = null,
    val createdAt: Date? = null,
    val updatedAt: Date? = null,
    val taj: String? = null,
    val name: String? = null,
    val nickname: String? = null,
    val family: FamilyInfoDto? = null,
    val cases: List<ChildInfoDto> = emptyList()
) : Serializable