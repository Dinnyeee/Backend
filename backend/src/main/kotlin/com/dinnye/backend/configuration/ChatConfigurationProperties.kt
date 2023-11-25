package com.dinnye.backend.configuration

import org.springframework.boot.context.properties.ConfigurationProperties
import org.springframework.boot.context.properties.bind.ConstructorBinding

@ConfigurationProperties(prefix = "backend.chat-app")
data class ChatConfigurationProperties @ConstructorBinding constructor(
    val allowedOrigin: String,
    val appId: String,
    val key: String,
    val secret: String,
    val cluster: String,
)