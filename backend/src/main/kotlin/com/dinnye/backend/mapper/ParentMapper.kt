package com.dinnye.backend.mapper

import com.dinnye.backend.db.model.Parent
import com.dinnye.backend.dto.parent.ParentGetDto
import com.dinnye.backend.dto.parent.ParentPostDto
import com.dinnye.backend.dto.parent.ParentPutDto
import com.dinnye.backend.service.interfaces.FamilyService
import com.dinnye.backend.util.FamilyIdSource
import com.dinnye.backend.util.FamilyIdTarget
import com.dinnye.backend.util.IgnoreAuditing
import com.dinnye.backend.util.IgnoreAuthorities
import com.dinnye.backend.util.IgnoreId
import com.dinnye.backend.util.IgnoreRole
import org.mapstruct.Mapper
import org.mapstruct.Mapping
import org.mapstruct.MappingConstants
import org.mapstruct.factory.Mappers

@Mapper(componentModel = MappingConstants.ComponentModel.SPRING, uses=[InfoDtoMapper::class, FamilyService::class])
interface ParentMapper: CommonMapper<Parent, ParentGetDto, ParentPostDto, ParentPutDto>{

        companion object {
            val INSTANCE: ParentMapper = Mappers.getMapper(ParentMapper::class.java)
        }

        @Mapping(target = "familyId", source = "family.id")
        override fun mapToGet(entity: Parent): ParentGetDto

        @FamilyIdTarget
        @Mapping(source = "pw", target = "password")
        override fun mapToPost(entity: Parent): ParentPostDto

        @FamilyIdTarget
        @Mapping(source = "pw", target = "password")
        override fun mapToPut(entity: Parent): ParentPutDto

        @IgnoreId
        @IgnoreAuditing
        @IgnoreRole
        @IgnoreAuthorities
        @FamilyIdSource
        @Mapping(source = "password", target = "pw")
        override fun mapFromPost(entity: ParentPostDto): Parent

        @IgnoreAuditing
        @IgnoreRole
        @IgnoreAuthorities
        @FamilyIdSource
        @Mapping(source = "password", target = "pw")
        override fun mapFromPut(entity: ParentPutDto): Parent
}