package com.dinnye.backend.dto

import com.dinnye.backend.db.model.Role
import com.dinnye.backend.mapper.Default
import java.io.Serializable
import java.util.*

data class PraxisInfoDto @Default constructor(
    val id: Long? = null,
    val name: String? = null
) : Serializable

data class ChildInfoDto @Default constructor(
    val id: Long? = null,
    val taj: String? = null,
    val name: String? = null,
    val nickname: String? = null
) : Serializable

data class FamilyInfoDto @Default constructor(
    val id: Long? = null,
    val name: String? = null
) : Serializable

data class UserInfoDto @Default constructor(
    val id: Long? = null,
    val name: String? = null,
    val email: String? = null,
    val role: Role = Role.PARENT
) : Serializable

data class CaseInfoDto @Default constructor(
    val id: Long? = null,
    val description: String? = null,
    val appointmentDate: Date? = null
) : Serializable