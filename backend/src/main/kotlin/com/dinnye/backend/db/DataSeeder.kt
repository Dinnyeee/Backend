package com.dinnye.backend.db

import com.dinnye.backend.db.model.Admin
import com.dinnye.backend.db.model.Appointment
import com.dinnye.backend.db.model.Assistant
import com.dinnye.backend.db.model.BaseEntity
import com.dinnye.backend.db.model.Case
import com.dinnye.backend.db.model.Child
import com.dinnye.backend.db.model.Doctor
import com.dinnye.backend.db.model.Family
import com.dinnye.backend.db.model.Parent
import com.dinnye.backend.db.model.Praxis
import com.dinnye.backend.db.repository.AssistantRepository
import com.dinnye.backend.db.repository.DoctorRepository
import com.dinnye.backend.db.repository.FamilyRepository
import com.dinnye.backend.db.repository.ParentRepository
import com.dinnye.backend.db.repository.PraxisRepository
import com.dinnye.backend.db.repository.UserRepository
import com.dinnye.backend.util.now
import io.github.oshai.kotlinlogging.KotlinLogging
import org.springframework.boot.CommandLineRunner
import org.springframework.dao.DataIntegrityViolationException
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Component
import java.util.*

@Component
class DataSeeder(
    private val userRepository: UserRepository, private val praxisRepository: PraxisRepository, private val familyRepository: FamilyRepository,
    private val doctorRepository: DoctorRepository,
    private val assistantRepository: AssistantRepository,
    private val parentRepository: ParentRepository
) : CommandLineRunner {
    override fun run(vararg args: String?) {
        seedData()
    }

    private fun seedData() {
        val admin = Admin().applyAndSave(userRepository) {
            name = "Admin User"
            email = "admin@example.com"
            pw = "adminPassword"
        }

        val doctor = Doctor().applyAndSave(doctorRepository) {
            name = "Doctor User"
            email = "doctor@example.com"
            pw = "doctorPassword"
        }

        val assistant = Assistant().applyAndSave(assistantRepository) {
            name = "Assistant User"
            email = "assistant@example.com"
            pw = "assistantPassword"
        }

        val parent = Parent().applyAndSave(parentRepository){
            name = "Parent User"
            email = "parent@example.com"
            pw = "parentPassword"
        }

        val praxis = Praxis().applyAndSave(praxisRepository) {
            this.name = "Test Praxis"
            this.assistant = assistant
            this.doctor = doctor
        }

        val family = Family().applyAndSave(familyRepository) {
            this.name = "Test Family"
            this.children.addAll(createChildren(this, praxis))
            this.praxis = praxis
            this.parent = parent
        }
    }

    private fun createChildren(family: Family, praxis: Praxis): List<Child> = listOf(
        Child().apply {
            this.taj = "TEST1"
            this.name = "Test Child 1"
            this.nickname = "Test Child 1"
            this.family = family
            this.cases.add(createCase(this, praxis))
        },
        Child().apply {
            this.taj = "TEST2"
            this.name = "Test Child 2"
            this.nickname = "Test Child 2"
            this.family = family
            this.cases.add(createCase(this, praxis))
        } ,
        Child().apply {
            this.taj = "TEST3"
            this.name = "Test Child 3"
            this.nickname = "Test Child 3"
            this.family = family
            this.cases.add(createCase(this, praxis))
        }
    )

    private fun createCase(child: Child, praxis: Praxis) = Case().apply {
        this.description = "${child.name} case"
        this.praxis = praxis
        this.child = child
        this.appointment = Appointment().apply {
            date = Date().now()
        }
    }

    private fun <T: BaseEntity> T.applyAndSave(repository: JpaRepository<T, Long>, block: T.() -> Unit): T {
        block()
        try {
            repository.saveAndFlush(this)
        } catch (exception: DataIntegrityViolationException) {
            KotlinLogging.logger(DataSeeder::class.java.name).debug {
                "${this.javaClass} was already seeded"
            }
        }
        return this
    }
}