package com.dinnye.backend.mapper

import com.dinnye.backend.db.model.Case
import com.dinnye.backend.dto._case.CaseGetDto
import com.dinnye.backend.dto._case.CasePostDto
import com.dinnye.backend.dto._case.CasePutDto
import com.dinnye.backend.service.interfaces.ChildService
import com.dinnye.backend.service.interfaces.PraxisService
import com.dinnye.backend.util.ChildIdSource
import com.dinnye.backend.util.ChildIdTarget
import com.dinnye.backend.util.IgnoreAuditing
import com.dinnye.backend.util.IgnoreId
import com.dinnye.backend.util.MapperUtil
import com.dinnye.backend.util.PraxisIdSource
import com.dinnye.backend.util.PraxisIdTarget
import org.mapstruct.Mapper
import org.mapstruct.Mapping
import org.mapstruct.MappingConstants.ComponentModel
import org.mapstruct.factory.Mappers

@Mapper(componentModel = ComponentModel.SPRING, uses = [InfoDtoMapper::class, MapperUtil::class, PraxisService::class, ChildService::class])
interface CaseMapper: CommonMapper<Case, CaseGetDto, CasePostDto, CasePutDto>{
    companion object {
        val INSTANCE: CaseMapper = Mappers.getMapper(CaseMapper::class.java)
    }

    @Mapping(target = "appointmentDate", source = "appointment.date")
    override fun mapToGet(entity: Case): CaseGetDto

    @PraxisIdTarget
    @ChildIdTarget
    @Mapping(target = "appointmentDate", source = "appointment.date")
    override fun mapToPost(entity: Case): CasePostDto

    @PraxisIdTarget
    @ChildIdTarget
    @Mapping(target = "appointmentDate", source = "appointment.date")
    override fun mapToPut(entity: Case): CasePutDto

    @IgnoreId
    @IgnoreAuditing
    @PraxisIdSource
    @ChildIdSource
    @Mapping(target = "appointment", source = "appointmentDate", qualifiedByName = ["dateToAppointment"])
    override fun mapFromPost(entity: CasePostDto): Case

    @IgnoreAuditing
    @PraxisIdSource
    @ChildIdSource
    @Mapping(target = "appointment", source = "appointmentDate", qualifiedByName = ["dateToAppointment"])
    override fun mapFromPut(entity: CasePutDto): Case
}