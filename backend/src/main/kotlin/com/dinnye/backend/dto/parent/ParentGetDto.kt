package com.dinnye.backend.dto.parent

import com.dinnye.backend.dto.FamilyInfoDto
import com.dinnye.backend.util.Default
import java.io.Serializable

data class ParentGetDto @Default constructor (
    val id: Long? = null,
    val name: String? = null,
    val email: String? = null,
    val familyId: Long? = null
) : Serializable