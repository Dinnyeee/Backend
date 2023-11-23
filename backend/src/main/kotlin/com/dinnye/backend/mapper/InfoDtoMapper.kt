package com.dinnye.backend.mapper

import com.dinnye.backend.db.model.*
import com.dinnye.backend.dto.CaseInfoDto
import com.dinnye.backend.dto.ChildInfoDto
import com.dinnye.backend.dto.FamilyInfoDto
import com.dinnye.backend.dto.PraxisInfoDto
import com.dinnye.backend.dto.UserInfoDto
import com.dinnye.backend.dto.UserPostDto
import com.dinnye.backend.util.MapperUtil
import org.mapstruct.Mapper
import org.mapstruct.Mapping
import org.mapstruct.MappingConstants.ComponentModel
import org.mapstruct.MappingTarget
import org.mapstruct.ReportingPolicy

@Mapper(componentModel = ComponentModel.SPRING, uses = [MapperUtil::class], unmappedTargetPolicy = ReportingPolicy.IGNORE)
interface InfoDtoMapper {
    @Mapping(target = "families", ignore = true)
    @Mapping(target = "cases", ignore = true)
    fun map(dto: PraxisInfoDto): Praxis

    @Mapping(target = "cases", ignore = true)
    fun map(dto: ChildInfoDto): Child

    @Mapping(target = "children", ignore = true)
    fun map(dto: FamilyInfoDto): Family

    fun map(dto: UserInfoDto, @MappingTarget doctor: Doctor)

    fun map(dto: UserInfoDto, @MappingTarget admin: Admin)

    fun map(dto: UserInfoDto, @MappingTarget assistant: Assistant)

    fun map(dto: UserInfoDto, @MappingTarget parent: Parent)

    @Mapping(target = "appointment", source = "appointmentDate", qualifiedByName = ["dateToAppointment"])
    @Mapping(target = "praxis", ignore = true)
    @Mapping(target = "child", ignore = true)
    fun map(dto: CaseInfoDto): Case

    fun map(dto: Praxis): PraxisInfoDto

    fun map(dto: Child): ChildInfoDto

    fun map(dto: Family): FamilyInfoDto

    fun map(doctor: Doctor): UserInfoDto //ambiguous 2step methods found error fix

    fun map(assistant: Assistant): UserInfoDto //ambiguous 2step methods found error fix

    fun map(parent: Parent): UserInfoDto //ambiguous 2step methods found error fix

    fun map(doctor: Doctor, @MappingTarget dto: UserInfoDto)

    fun map(admin: Admin, @MappingTarget dto: UserInfoDto)

    fun map(assistant: Assistant, @MappingTarget dto: UserInfoDto)

    fun map(parent: Parent, @MappingTarget dto: UserInfoDto)

    fun map(user: User): UserInfoDto

    //The return type User is an abstract class or interface. Provide a non abstract / non interface result type or a factory method.
    //fun map(userInfoDto: UserInfoDto): User

    fun map(userPostDto: UserPostDto, @MappingTarget doctor: Doctor)

    @Mapping(target = "appointmentDate", source = "appointment.date")
    fun map(dto: Case): CaseInfoDto

}