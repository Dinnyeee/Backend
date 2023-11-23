package com.dinnye.backend.dto

import com.dinnye.backend.db.model.Role
import com.dinnye.backend.util.Default
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
    var id: Long? = null,
    var name: String? = null,
    var email: String? = null,
    var role: Role = Role.PARENT
) : Serializable

data class CaseInfoDto @Default constructor(
    val id: Long? = null,
    val description: String? = null,
    val appointmentDate: Date? = null
) : Serializable

data class UserPostDto @Default constructor( //Szóval ez Doctor post csak szenved a refactor-rename, meg tudom h nem ide kell
    var name: String? = null,
    var email: String? = null,
    var password: String? = null,
    var praxisId: Long? = null,
) : Serializable