package com.dinnye.backend.config

import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.http.HttpMethod
import org.springframework.security.authentication.AuthenticationProvider
import org.springframework.security.config.Customizer
import org.springframework.security.config.annotation.web.builders.HttpSecurity
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer
import org.springframework.security.config.annotation.web.invoke
import org.springframework.security.config.http.SessionCreationPolicy
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter
import org.springframework.security.web.SecurityFilterChain
import org.springframework.web.cors.CorsConfiguration
import org.springframework.web.cors.CorsConfigurationSource
import org.springframework.web.cors.UrlBasedCorsConfigurationSource

@Configuration
@EnableWebSecurity
class SecurityConfig(
    private val jwtAuthfilter: JwtAuthenticationFilter,
    private val authenticationProvider: AuthenticationProvider
) {

    @Bean
    fun filterChain(http: HttpSecurity): SecurityFilterChain {
        http.cors(Customizer.withDefaults())
            .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
        http {
            csrf { disable() }
            authorizeHttpRequests {
                authorize("/auth/**", permitAll)
                authorize(HttpMethod.OPTIONS, "/**", permitAll)
                authorize("/api/doctor", hasAnyRole("ADMIN", "DOCTOR"))
                authorize("/api/assistant", hasAnyRole("DOCTOR", "ADMIN"))
                authorize("/api/parent", hasAnyRole("DOCTOR", "ADMIN"))
                authorize("/api/case", hasAnyRole("DOCTOR", "ASSISTANT", "PARENT","ADMIN"))
                authorize("/ws/**", hasAnyRole("DOCTOR", "ASSISTANT", "PARENT","ADMIN"))
                authorize("/api/child", hasAnyRole("DOCTOR", "ADMIN"))
                authorize("/api/family", hasAnyRole("DOCTOR", "ADMIN", "ASSISTANT", "PARENT"))
                authorize("/api/praxis", hasAnyRole("DOCTOR", "ADMIN", "ASSISTANT"))
                authorize(HttpMethod.PUT, "/api/parent/{familyId}/addChild", hasAnyRole("PARENT"))
            }
            addFilterBefore(jwtAuthfilter, UsernamePasswordAuthenticationFilter::class.java)
        }
        return http.build()
    }

    /*@Bean
    fun corsConfigurationSource(): CorsConfigurationSource {
        val configuration = CorsConfiguration()
        configuration.allowedOrigins = listOf("http://localhost:3000")
        configuration.allowedMethods = listOf("GET", "POST", "PUT", "DELETE", "OPTIONS")
        val source = UrlBasedCorsConfigurationSource()
        source.registerCorsConfiguration("/**", configuration)
        return source
    }
    */
     */
}