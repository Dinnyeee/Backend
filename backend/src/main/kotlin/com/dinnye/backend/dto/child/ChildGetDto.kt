package com.dinnye.backend.dto.child

import java.io.Serializable
import java.util.*

data class ChildGetDto(
    val id: Long? = null,
    val createdAt: Date? = null,
    val updatedAt: Date? = null,
    val taj: String? = null,
    val name: String? = null,
    val nickname: String? = null,
    val family: ChildFamilyDto? = null,
    val cases: List<ChildCaseDto> = emptyList()
) : Serializable {
    data class ChildFamilyDto(
        val id: Long? = null,
        val name: String? = null
    ) : Serializable

    data class ChildCaseDto(
        val id: Long? = null,
        val description: String? = null
    ) : Serializable
}