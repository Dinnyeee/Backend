package com.dinnye.backend.mapper

import com.dinnye.backend.db.model.Doctor
import com.dinnye.backend.dto.doctor.DoctorGetDto
import com.dinnye.backend.dto.doctor.DoctorPostDto
import com.dinnye.backend.dto.doctor.DoctorPutDto
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
interface DoctorMapper: CommonMapper<Doctor, DoctorGetDto, DoctorPostDto, DoctorPutDto>{

    companion object {
        val INSTANCE: DoctorMapper = Mappers.getMapper(DoctorMapper::class.java)
    }

    @PraxisIdTarget
    override fun mapToGet(entity: Doctor): DoctorGetDto

    @PraxisIdTarget
    @Mapping(source = "pw", target = "password")
    override fun mapToPost(entity: Doctor): DoctorPostDto

    @PraxisIdTarget
    @Mapping(source = "pw", target = "password")
    override fun mapToPut(entity: Doctor): DoctorPutDto

    @IgnoreId
    @IgnoreAuditing
    @IgnoreRole
    @IgnoreAuthorities
    @PraxisIdSource
    @Mapping(source = "password", target = "pw")
    override fun mapFromPost(entity: DoctorPostDto): Doctor

    @IgnoreAuditing
    @IgnoreRole
    @PraxisIdSource
    @IgnoreAuthorities
    @Mapping(source = "password", target = "pw")
    override fun mapFromPut(entity: DoctorPutDto): Doctor

}