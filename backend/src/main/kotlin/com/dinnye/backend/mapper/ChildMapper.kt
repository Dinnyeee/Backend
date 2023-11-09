package com.dinnye.backend.mapper

import com.dinnye.backend.db.model.Child
import com.dinnye.backend.dto.child.ChildGetDto
import com.dinnye.backend.dto.child.ChildPostDto
import com.dinnye.backend.dto.child.ChildPutDto
import com.dinnye.backend.util.FamilyIdSource
import com.dinnye.backend.util.FamilyIdTarget
import com.dinnye.backend.util.IgnoreAuditing
import com.dinnye.backend.util.IgnoreId
import com.dinnye.backend.util.MapperUtil
import org.mapstruct.Mapper
import org.mapstruct.Mapping

@Mapper(uses = [InfoDtoMapper::class, MapperUtil::class])
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