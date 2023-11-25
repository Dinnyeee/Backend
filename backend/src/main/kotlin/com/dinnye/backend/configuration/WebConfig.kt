package com.dinnye.backend.configuration

import org.springframework.boot.context.properties.EnableConfigurationProperties
import org.springframework.context.annotation.Configuration
import org.springframework.web.servlet.config.annotation.CorsRegistry
import org.springframework.web.servlet.config.annotation.EnableWebMvc
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer

@Configuration
@EnableWebMvc
@EnableConfigurationProperties(ChatConfigurationProperties::class)
class WebConfig(private val chatConfigurationProperties: ChatConfigurationProperties) : WebMvcConfigurer {
    override fun addCorsMappings(registry: CorsRegistry) {
        registry.addMapping("/ws/**")
            .allowedOrigins(chatConfigurationProperties.allowedOrigin)
    }
}