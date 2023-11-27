package com.dinnye.backend.mapper

import com.dinnye.backend.db.model.Assistant
import com.dinnye.backend.dto.assistent.AssistantGetDto
import com.dinnye.backend.dto.assistent.AssistantPostDto
import com.dinnye.backend.dto.assistent.AssistantPutDto
import com.dinnye.backend.service.interfaces.PraxisService
import com.dinnye.backend.util.IgnoreAuditing
import com.dinnye.backend.util.IgnoreAuthorities
import com.dinnye.backend.util.IgnoreId
import com.dinnye.backend.util.IgnoreRole
import com.dinnye.backend.util.PraxisIdSource
import com.dinnye.backend.util.PraxisIdTarget
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
        @Mapping(source = "pw", target = "password")
        override fun mapToPost(entity: Assistant): AssistantPostDto

        @PraxisIdTarget
        @Mapping(source = "pw", target = "password")
        override fun mapToPut(entity: Assistant): AssistantPutDto

        @IgnoreId
        @IgnoreAuditing
        @IgnoreRole
        @IgnoreAuthorities
        @PraxisIdSource
        @Mapping(source = "password", target = "pw")
        override fun mapFromPost(entity: AssistantPostDto): Assistant

        @IgnoreAuditing
        @IgnoreRole
        @IgnoreAuthorities
        @PraxisIdSource
        @Mapping(source = "password", target = "pw")
        override fun mapFromPut(entity: AssistantPutDto): Assistant
}