package com.dinnye.backend.mapper

import com.dinnye.backend.db.model.Doctor
import com.dinnye.backend.dto.doctor.DoctorGetDto
import com.dinnye.backend.dto.doctor.DoctorPostDto
import com.dinnye.backend.dto.doctor.DoctorPutDto
import com.dinnye.backend.service.interfaces.PraxisService
import com.dinnye.backend.util.*
import org.mapstruct.Mapper
import org.mapstruct.Mapping
import org.mapstruct.MappingConstants
import org.mapstruct.factory.Mappers

@Mapper(componentModel = MappingConstants.ComponentModel.SPRING, uses=[InfoDtoMapper::class, PraxisService::class])
interface DoctorMapper: CommonMapper<Doctor, DoctorGetDto, DoctorPostDto, DoctorPutDto>{

    companion object {
        val INSTANCE: DoctorMapper = Mappers.getMapper(DoctorMapper::class.java)
    }

    @Mapping(target="praxisId", source="praxis.id")

    override fun mapToGet(entity: Doctor): DoctorGetDto

    @PraxisIdTarget
    override fun mapToPost(entity: Doctor): DoctorPostDto

    @PraxisIdTarget
    override fun mapToPut(entity: Doctor): DoctorPutDto

    @IgnoreId
    @IgnoreAuditing
    @IgnoreRole
    @PraxisIdSource
    override fun mapFromPost(entity: DoctorPostDto): Doctor

    @IgnoreAuditing
    @IgnoreRole
    @PraxisIdSource
    override fun mapFromPut(entity: DoctorPutDto): Doctor

}