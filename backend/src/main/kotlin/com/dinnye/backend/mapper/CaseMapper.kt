package com.dinnye.backend.mapper

import com.dinnye.backend.db.model.Case
import com.dinnye.backend.dto._case.CaseGetDto
import com.dinnye.backend.dto._case.CasePostDto
import com.dinnye.backend.dto._case.CasePutDto
import org.mapstruct.Mapper
import org.mapstruct.Mapping
import org.mapstruct.factory.Mappers

@Mapper(uses = [InfoDtoMapper::class])
interface CaseMapper: CommonMapper<Case, CaseGetDto, CasePostDto, CasePutDto>{
    companion object {
        val INSTANCE: CaseMapper = Mappers.getMapper(CaseMapper::class.java)
    }

    @Mapping(target = "appointmentDate", source = "appointment", qualifiedByName = ["appointmentToDate"])
    override fun mapToGet(entity: Case): CaseGetDto
    override fun mapToPost(entity: Case): CasePostDto
    override fun mapToPut(entity: Case): CasePutDto
    @Mapping(target = "praxis.id", source = "praxisId")
    @Mapping(target = "child.id", source = "childId")
    @Mapping(target = "appointment", source = "appointmentDate", qualifiedByName = ["dateToAppointment"])
    override fun mapFromPost(entity: CasePostDto): Case

    @Mapping(target = "praxis.id", source = "praxisId")
    @Mapping(target = "child.id", source = "childId")
    @Mapping(target = "appointment", source = "appointmentDate", qualifiedByName = ["dateToAppointment"])
    override fun mapFromPut(entity: CasePutDto): Case
}