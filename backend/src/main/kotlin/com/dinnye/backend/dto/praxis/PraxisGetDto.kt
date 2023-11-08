package com.dinnye.backend.dto.praxis

import com.dinnye.backend.dto.CaseInfoDto
import com.dinnye.backend.dto.FamilyInfoDto
import com.dinnye.backend.dto.UserInfoDto
import java.io.Serializable

data class PraxisGetDto(
    val id: Long? = null,
    val name: String? = null,
    val family: List<FamilyInfoDto> = emptyList(),
    val doctor: UserInfoDto? = null,
    val assistant: UserInfoDto? = null,
    val cases: List<CaseInfoDto> = emptyList()
) : Serializable