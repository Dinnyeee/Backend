package com.dinnye.backend.mapper

import com.dinnye.backend.db.model.Assistant
import com.dinnye.backend.dto.assistent.AssistantGetDto
import com.dinnye.backend.dto.assistent.AssistantPostDto
import com.dinnye.backend.dto.assistent.AssistantPutDto
import com.dinnye.backend.service.interfaces.PraxisService
import com.dinnye.backend.util.*
import org.mapstruct.Mapper
import org.mapstruct.Mapping
import org.mapstruct.MappingConstants
import org.mapstruct.factory.Mappers

@Mapper(componentModel = MappingConstants.ComponentModel.SPRING, uses=[InfoDtoMapper::class, PraxisService::class])
interface AssistantMapper: CommonMapper<Assistant, AssistantGetDto, AssistantPostDto, AssistantPutDto> {

        companion object {
            val INSTANCE: AssistantMapper = Mappers.getMapper(AssistantMapper::class.java)
        }

        @Mapping(target="praxisId", source="praxis.id")
        override fun mapToGet(entity: Assistant): AssistantGetDto

        @PraxisIdTarget
        override fun mapToPost(entity: Assistant): AssistantPostDto

        @PraxisIdTarget
        override fun mapToPut(entity: Assistant): AssistantPutDto

        @IgnoreId
        @IgnoreAuditing
        @IgnoreRole
        @PraxisIdSource
        override fun mapFromPost(entity: AssistantPostDto): Assistant

        @IgnoreAuditing
        @IgnoreRole
        @PraxisIdSource
        override fun mapFromPut(entity: AssistantPutDto): Assistant
}