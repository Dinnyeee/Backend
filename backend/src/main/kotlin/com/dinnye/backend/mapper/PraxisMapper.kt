package com.dinnye.backend.mapper

import com.dinnye.backend.db.model.Praxis
import com.dinnye.backend.dto.praxis.PraxisGetDto
import com.dinnye.backend.dto.praxis.PraxisPostDto
import com.dinnye.backend.dto.praxis.PraxisPutDto
import com.dinnye.backend.service.interfaces.UserService
import com.dinnye.backend.util.AssistantIdSource
import com.dinnye.backend.util.AssistantIdTarget
import com.dinnye.backend.util.DoctorIdSource
import com.dinnye.backend.util.DoctorIdTarget
import com.dinnye.backend.util.IgnoreAuditing
import com.dinnye.backend.util.IgnoreId
import org.mapstruct.Mapper
import org.mapstruct.Mapping
import org.mapstruct.MappingConstants.ComponentModel

@Mapper(componentModel = ComponentModel.SPRING, uses = [InfoDtoMapper::class, UserService::class])
interface PraxisMapper: CommonMapper<Praxis, PraxisGetDto, PraxisPostDto, PraxisPutDto> {

    override fun mapToGet(entity: Praxis): PraxisGetDto

    @DoctorIdTarget
    @AssistantIdTarget
    override fun mapToPost(entity: Praxis): PraxisPostDto

    @DoctorIdTarget
    @AssistantIdTarget
    override fun mapToPut(entity: Praxis): PraxisPutDto

    @IgnoreId
    @IgnoreAuditing
    @DoctorIdSource
    @AssistantIdSource
    @Mapping(target = "families", ignore = true)
    @Mapping(target = "cases", ignore = true)
    override fun mapFromPost(entity: PraxisPostDto): Praxis

    @IgnoreAuditing
    @DoctorIdSource
    @AssistantIdSource
    @Mapping(target = "families", ignore = true)
    @Mapping(target = "cases", ignore = true)
    override fun mapFromPut(entity: PraxisPutDto): Praxis
}