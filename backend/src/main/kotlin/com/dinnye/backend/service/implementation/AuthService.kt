package com.dinnye.backend.service.implementation

import com.dinnye.backend.db.model.*
import com.dinnye.backend.db.repository.UserRepository
import com.dinnye.backend.dto.auth.AuthResponse
import com.dinnye.backend.dto.auth.LoginDto
import com.dinnye.backend.dto.auth.RegisterDto
import com.dinnye.backend.service.interfaces.AssistantService
import com.dinnye.backend.service.interfaces.DoctorService
import com.dinnye.backend.service.interfaces.ParentService
import org.springframework.security.authentication.AuthenticationManager
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken
import org.springframework.security.crypto.password.PasswordEncoder
import org.springframework.stereotype.Service
import java.util.NoSuchElementException

@Service
class AuthService(
    private val userRepository: UserRepository,
    private val parentService: ParentService,
    private val assistantService: AssistantService,
    private val doctorService: DoctorService,
    private val passwordEncoder: PasswordEncoder,
    private val jwtService: JwtService,
    private val authenticationManager: AuthenticationManager
) {

    fun register(req: RegisterDto): AuthResponse {
        val user: User
        when(req.role){
            Role.DOCTOR.name -> {
                val doctor = Doctor()
                doctor.role = Role.DOCTOR
                doctor.name = req.name
                doctor.email = req.email
                doctor.pw = passwordEncoder.encode(req.password)
                user = doctorService.create(doctor)
            }
            Role.ASSISTANT.name -> {
                val assistant = Assistant()
                assistant.role = Role.ASSISTANT
                assistant.name = req.name
                assistant.email = req.email
                assistant.pw = passwordEncoder.encode(req.password)
                user = assistantService.create(assistant)
            }
            Role.PARENT.name -> {
                val parent = Parent()
                parent.role = Role.PARENT
                parent.name = req.name
                parent.email = req.email
                parent.pw = passwordEncoder.encode(req.password)
                user = parentService.create(parent)
            }
            else -> throw IllegalArgumentException("Invalid role")
        }
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