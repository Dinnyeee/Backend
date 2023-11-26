package com.dinnye.backend.service.implementation

import com.dinnye.backend.db.model.Doctor
import com.dinnye.backend.db.model.Role
import com.dinnye.backend.db.model.User
import com.dinnye.backend.db.repository.UserRepository
import com.dinnye.backend.dto.auth.AuthResponse
import com.dinnye.backend.dto.auth.LoginDto
import com.dinnye.backend.dto.auth.RegisterDto
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

    fun register(req: RegisterDto): AuthResponse {
        val user = Doctor()
        if(Role.DOCTOR.name == req.role){
            user.name = req.name
            user.email = req.email
            user.pw = passwordEncoder.encode(req.password)
            user.role = Role.DOCTOR
        }
        userRepository.save(user)
        val jwtToken = jwtService.generateToken(user)
        return AuthResponse(role = req.role, accessToken = jwtToken)
    }

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