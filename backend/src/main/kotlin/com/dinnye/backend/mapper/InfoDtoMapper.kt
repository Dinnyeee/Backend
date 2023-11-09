package com.dinnye.backend.mapper

import com.dinnye.backend.db.model.Admin
import com.dinnye.backend.db.model.Assistant
import com.dinnye.backend.db.model.Case
import com.dinnye.backend.db.model.Child
import com.dinnye.backend.db.model.Doctor
import com.dinnye.backend.db.model.Family
import com.dinnye.backend.db.model.Parent
import com.dinnye.backend.db.model.Praxis
import com.dinnye.backend.dto.CaseInfoDto
import com.dinnye.backend.dto.ChildInfoDto
import com.dinnye.backend.dto.FamilyInfoDto
import com.dinnye.backend.dto.PraxisInfoDto
import com.dinnye.backend.dto.UserInfoDto
import com.dinnye.backend.util.MapperUtil
import org.mapstruct.Mapper
import org.mapstruct.Mapping
import org.mapstruct.MappingTarget
import org.mapstruct.ReportingPolicy

@Mapper(uses = [MapperUtil::class], unmappedTargetPolicy = ReportingPolicy.IGNORE)
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

    fun map(doctor: Doctor, @MappingTarget dto: UserInfoDto)

    fun map(admin: Admin, @MappingTarget dto: UserInfoDto)

    fun map(assistant: Assistant, @MappingTarget dto: UserInfoDto)

    fun map(parent: Parent, @MappingTarget dto: UserInfoDto)

    @Mapping(target = "appointmentDate", source = "appointment.date")
    fun map(dto: Case): CaseInfoDto

}