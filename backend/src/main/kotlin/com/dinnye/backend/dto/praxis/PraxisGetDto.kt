package com.dinnye.backend.dto.praxis

import java.io.Serializable
import java.util.*

/**
 * DTO for {@link com.dinnye.backend.db.model.Praxis}
 */
data class PraxisGetDto(
    val id: Long? = null,
    val name: String? = null,
    val family: List<PraxisFamilyDto> = emptyList(),
    val doctor: PraxisDoctorDto? = null,
    val assistant: PraxisAssistantDto? = null,
    val cases: List<PraxisCaseDto> = emptyList()
) : Serializable {

    data class PraxisFamilyDto(
        val id: Long? = null,
        val name: String? = null
    ) : Serializable

    data class PraxisDoctorDto(
        val id: Long? = null,
        val name: String? = null,
        val email: String? = null
    ) : Serializable

    data class PraxisAssistantDto(
        val id: Long? = null,
        val name: String? = null,
        val email: String? = null
    ) : Serializable

    data class PraxisCaseDto(
        val id: Long? = null,
        val description: String? = null,
        val appointmentDate: Date? = null
    ) : Serializable
}