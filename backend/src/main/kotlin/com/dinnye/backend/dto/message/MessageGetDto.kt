package com.dinnye.backend.dto.message

import com.dinnye.backend.dto.CaseInfoDto
import com.dinnye.backend.dto.UserInfoDto
import java.util.*

data class MessageGetDto(
    val id: Long? = null,
    val user: UserInfoDto? = null,
    val caseDto: CaseInfoDto? = null,
    val message: String = "",
    val createdAt: Date? = null,
)
