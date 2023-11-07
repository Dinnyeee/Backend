package com.dinnye.backend.dto.family

import java.io.Serializable
import java.util.*

/**
 * DTO for {@link com.dinnye.backend.db.model.Family}
 */
data class FamilyGetDto(
    val id: Long? = null,
    val createdAt: Date? = null,
    val updatedAt: Date? = null,
    val name: String? = null,
    val parent: FamilyParentDto? = null,
    val children: List<FamilyChildDto> = emptyList(),
    val praxis: FamilyPraxisDto? = null
) : Serializable {
    data class FamilyParentDto(
        val id: Long? = null,
        val name: String? = null,
        val email: String? = null,
    ) : Serializable

    data class FamilyChildDto(
        val id: Long? = null,
        val taj: String? = null,
        val name: String? = null,
        val nickname: String? = null
    ) : Serializable

    data class FamilyPraxisDto(
        val id: Long? = null,
        val name: String? = null
    ) : Serializable
}