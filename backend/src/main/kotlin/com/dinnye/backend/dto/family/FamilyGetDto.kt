package com.dinnye.backend.dto.family

import com.dinnye.backend.dto.ChildInfoDto
import com.dinnye.backend.dto.PraxisInfoDto
import com.dinnye.backend.dto.UserInfoDto
import java.io.Serializable
import java.util.*

data class FamilyGetDto(
    val id: Long? = null,
    val createdAt: Date? = null,
    val updatedAt: Date? = null,
    val name: String? = null,
    val parent: UserInfoDto? = null,
    val children: List<ChildInfoDto> = emptyList(),
    val praxis: PraxisInfoDto? = null
) : Serializable