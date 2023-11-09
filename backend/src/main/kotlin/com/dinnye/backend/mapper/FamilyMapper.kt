package com.dinnye.backend.mapper

import com.dinnye.backend.db.model.Family
import com.dinnye.backend.dto.family.FamilyGetDto
import com.dinnye.backend.dto.family.FamilyPostDto
import com.dinnye.backend.dto.family.FamilyPutDto
import com.dinnye.backend.service.interfaces.PraxisService
import com.dinnye.backend.service.interfaces.UserService
import com.dinnye.backend.util.IgnoreAuditing
import com.dinnye.backend.util.IgnoreId
import com.dinnye.backend.util.ParentIdSource
import com.dinnye.backend.util.ParentIdTarget
import com.dinnye.backend.util.PraxisIdSource
import com.dinnye.backend.util.PraxisIdTarget
import org.mapstruct.Mapper
import org.mapstruct.Mapping
import org.mapstruct.MappingConstants.ComponentModel

@Mapper(componentModel = ComponentModel.SPRING, uses = [InfoDtoMapper::class, UserService::class, PraxisService::class])
interface FamilyMapper: CommonMapper<Family, FamilyGetDto, FamilyPostDto, FamilyPutDto> {
    override fun mapToGet(entity: Family): FamilyGetDto

    @PraxisIdTarget
    @ParentIdTarget
    override fun mapToPost(entity: Family): FamilyPostDto

    @PraxisIdTarget
    @ParentIdTarget
    override fun mapToPut(entity: Family): FamilyPutDto

    @IgnoreId
    @IgnoreAuditing
    @ParentIdSource
    @PraxisIdSource
    @Mapping(target = "children", ignore = true)
    override fun mapFromPost(entity: FamilyPostDto): Family

    @IgnoreAuditing
    @ParentIdSource
    @PraxisIdSource
    @Mapping(target = "children", ignore = true)
    override fun mapFromPut(entity: FamilyPutDto): Family
}