package com.dinnye.backend.util

import com.dinnye.backend.db.model.Appointment
import org.mapstruct.Mapping
import org.mapstruct.Named
import org.springframework.stereotype.Component
import java.util.*

@Component
object MapperUtil {
    @Named("dateToAppointment")
    fun dateToAppointment(date: Date?): Appointment = Appointment().apply {
        this.date = date
    }
}

@Target(AnnotationTarget.CONSTRUCTOR)
@Retention(AnnotationRetention.RUNTIME)
annotation class Default

@Target(AnnotationTarget.FUNCTION)
@Retention(AnnotationRetention.RUNTIME)
@Mapping(target = "updatedAt", ignore = true)
@Mapping(target = "createdAt", ignore = true)
annotation class IgnoreAuditing

@Target(AnnotationTarget.FUNCTION)
@Retention(AnnotationRetention.RUNTIME)
@Mapping(target = "id", ignore = true)
annotation class IgnoreId

@Target(AnnotationTarget.FUNCTION)
@Retention(AnnotationRetention.RUNTIME)
@Mapping(target = "parentId", source = "parent.id")
annotation class ParentIdTarget

@Target(AnnotationTarget.FUNCTION)
@Retention(AnnotationRetention.RUNTIME)
@Mapping(target = "parent", source = "parentId")
annotation class ParentIdSource

@Target(AnnotationTarget.FUNCTION)
@Retention(AnnotationRetention.RUNTIME)
@Mapping(target = "praxisId", source = "praxis.id")
annotation class PraxisIdTarget

@Target(AnnotationTarget.FUNCTION)
@Retention(AnnotationRetention.RUNTIME)
@Mapping(target = "praxis", source = "praxisId")
annotation class PraxisIdSource

@Target(AnnotationTarget.FUNCTION)
@Retention(AnnotationRetention.RUNTIME)
@Mapping(target = "familyId", source = "family.id")
annotation class FamilyIdTarget

@Target(AnnotationTarget.FUNCTION)
@Retention(AnnotationRetention.RUNTIME)
@Mapping(target = "family.id", source = "familyId")
annotation class FamilyIdSource

@Target(AnnotationTarget.FUNCTION)
@Retention(AnnotationRetention.RUNTIME)
@Mapping(target = "childId", source = "child.id")
annotation class ChildIdTarget

@Target(AnnotationTarget.FUNCTION)
@Retention(AnnotationRetention.RUNTIME)
@Mapping(target = "child", source = "childId")
annotation class ChildIdSource

@Target(AnnotationTarget.FUNCTION)
@Retention(AnnotationRetention.RUNTIME)
@Mapping(target = "doctorId", source = "doctor.id")
annotation class DoctorIdTarget

@Target(AnnotationTarget.FUNCTION)
@Retention(AnnotationRetention.RUNTIME)
@Mapping(target = "doctor", source = "doctorId")
annotation class DoctorIdSource

@Target(AnnotationTarget.FUNCTION)
@Retention(AnnotationRetention.RUNTIME)
@Mapping(target = "assistantId", source = "assistant.id")
annotation class AssistantIdTarget

@Target(AnnotationTarget.FUNCTION)
@Retention(AnnotationRetention.RUNTIME)
@Mapping(target = "assistant", source = "assistantId")
annotation class AssistantIdSource

