package com.dinnye.backend.mapper

import com.dinnye.backend.db.model.Parent
import com.dinnye.backend.dto.parent.ParentGetDto
import com.dinnye.backend.dto.parent.ParentPostDto
import com.dinnye.backend.dto.parent.ParentPutDto
import com.dinnye.backend.service.interfaces.FamilyService
import com.dinnye.backend.util.*
import org.mapstruct.Mapper
import org.mapstruct.MappingConstants
import org.mapstruct.factory.Mappers

@Mapper(componentModel = MappingConstants.ComponentModel.SPRING, uses=[InfoDtoMapper::class, FamilyService::class])
interface ParentMapper: CommonMapper<Parent, ParentGetDto, ParentPostDto, ParentPutDto>{

        companion object {
            val INSTANCE: ParentMapper = Mappers.getMapper(ParentMapper::class.java)
        }

        override fun mapToGet(entity: Parent): ParentGetDto

        @FamilyIdTarget
        override fun mapToPost(entity: Parent): ParentPostDto

        @FamilyIdTarget
        override fun mapToPut(entity: Parent): ParentPutDto

        @IgnoreId
        @IgnoreAuditing
        @IgnoreRole
        @FamilyIdSource
        override fun mapFromPost(entity: ParentPostDto): Parent

        @IgnoreAuditing
        @IgnoreRole
        @FamilyIdSource
        override fun mapFromPut(entity: ParentPutDto): Parent
}