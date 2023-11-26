package com.dinnye.backend.dto.auth

import com.dinnye.backend.util.Default
import java.io.Serializable

data class AuthResponse @Default constructor(
    val role: String? = null,
    val accessToken: String? = null
) : Serializable