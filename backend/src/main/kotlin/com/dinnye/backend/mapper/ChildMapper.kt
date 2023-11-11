package com.dinnye.backend.mapper

import com.dinnye.backend.db.model.Child
import com.dinnye.backend.dto.child.ChildGetDto
import com.dinnye.backend.dto.child.ChildPostDto
import com.dinnye.backend.dto.child.ChildPutDto
import com.dinnye.backend.service.interfaces.FamilyService
import com.dinnye.backend.util.FamilyIdSource
import com.dinnye.backend.util.FamilyIdTarget
import com.dinnye.backend.util.IgnoreAuditing
import com.dinnye.backend.util.IgnoreId
import org.mapstruct.Mapper
import org.mapstruct.Mapping
import org.mapstruct.MappingConstants.ComponentModel

@Mapper(componentModel = ComponentModel.SPRING, uses = [InfoDtoMapper::class, FamilyService::class])
interface ChildMapper: CommonMapper<Child, ChildGetDto, ChildPostDto, ChildPutDto> {
    override fun mapToGet(entity: Child): ChildGetDto

    @FamilyIdTarget
    override fun mapToPost(entity: Child): ChildPostDto

    @FamilyIdTarget
    override fun mapToPut(entity: Child): ChildPutDto

    @IgnoreId
    @IgnoreAuditing
    @FamilyIdSource
    @Mapping(target = "cases", ignore = true)
    override fun mapFromPost(entity: ChildPostDto): Child

    @IgnoreAuditing
    @FamilyIdSource
    @Mapping(target = "cases", ignore = true)
    override fun mapFromPut(entity: ChildPutDto): Child
}