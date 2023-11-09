package com.dinnye.backend.dto.child

import com.dinnye.backend.dto.CaseInfoDto
import com.dinnye.backend.dto.FamilyInfoDto
import com.dinnye.backend.util.Default
import java.io.Serializable
import java.util.*

data class ChildGetDto @Default constructor (
    val id: Long? = null,
    val createdAt: Date? = null,
    val updatedAt: Date? = null,
    val taj: String? = null,
    val name: String? = null,
    val nickname: String? = null,
    val family: FamilyInfoDto? = null,
    val cases: List<CaseInfoDto> = emptyList()
) : Serializable