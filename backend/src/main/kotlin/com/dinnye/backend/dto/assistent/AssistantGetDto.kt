package com.dinnye.backend.dto.assistent

import com.dinnye.backend.dto.PraxisInfoDto
import com.dinnye.backend.util.Default
import java.io.Serializable

data class AssistantGetDto @Default constructor(
    val id: Long? = null,
    val name: String? = null,
    val email: String? = null,
    val praxisId: Long? = null
) : Serializable