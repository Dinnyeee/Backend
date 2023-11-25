package com.dinnye.backend.dto.message

import com.dinnye.backend.dto.CaseInfoDto
import com.dinnye.backend.dto.UserInfoDto
import com.dinnye.backend.util.Default
import java.util.*

data class MessageGetDto @Default constructor(
    val id: Long? = null,
    val user: UserInfoDto? = null,
    val case: CaseInfoDto? = null,
    val message: String = "",
    val createdAt: Date? = null,
)
