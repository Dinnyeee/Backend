package com.dinnye.backend.dto.praxis

import com.dinnye.backend.dto.CaseInfoDto
import com.dinnye.backend.dto.FamilyInfoDto
import com.dinnye.backend.dto.UserInfoDto
import com.dinnye.backend.util.Default
import java.io.Serializable

data class PraxisGetDto @Default constructor (
    val id: Long? = null,
    val name: String? = null,
    val families: List<FamilyInfoDto> = emptyList(),
    val doctor: UserInfoDto? = null,
    val assistant: UserInfoDto? = null,
    val cases: List<CaseInfoDto> = emptyList()
) : Serializable