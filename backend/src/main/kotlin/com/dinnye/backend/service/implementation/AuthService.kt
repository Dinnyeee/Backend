package com.dinnye.backend.service.implementation

import com.dinnye.backend.db.repository.UserRepository
import com.dinnye.backend.dto.auth.AuthResponse
import com.dinnye.backend.dto.auth.LoginDto
import org.springframework.security.authentication.AuthenticationManager
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken
import org.springframework.security.crypto.password.PasswordEncoder
import org.springframework.stereotype.Service
import java.util.NoSuchElementException

@Service
class AuthService(
    private val userRepository: UserRepository,
    private val passwordEncoder: PasswordEncoder,
    private val jwtService: JwtService,
    private val authenticationManager: AuthenticationManager
) {

    /*fun register(req: RegRequest): AuthResponse {
        val user = User(
            firstname = req.firstname,
            lastname = req.lastname,
            email = req.email,
            username = req.username,
            password = passwordEncoder.encode(req.password),
            role = Role.CUSTOMER
        )
        userRepository.save(user)
        val jwtToken = jwtService.generateToken(user)
        return AuthResponse(token = jwtToken)
    }*/

    fun login(req: LoginDto): AuthResponse {
        authenticationManager.authenticate(
            UsernamePasswordAuthenticationToken(
                req.email,
                req.password
            )
        )
        val user = userRepository.findByEmail(req.email!!).orElseThrow{
                NoSuchElementException("No user with email ${req.email} found")
        }
        val jwtToken = jwtService.generateToken(user)
        println(jwtToken)
        return AuthResponse(accessToken = jwtToken, role = user.role.toString())
    }
}