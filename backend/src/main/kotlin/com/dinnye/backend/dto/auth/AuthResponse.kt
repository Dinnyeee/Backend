package com.dinnye.backend.dto.auth

data class AuthResponse(
    private var role: String? = null,
    private var accessToken: String? = null
)