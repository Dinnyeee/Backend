package com.dinnye.backend.mapper

import com.dinnye.backend.db.model.Message
import com.dinnye.backend.dto.message.MessageGetDto
import com.dinnye.backend.dto.message.MessagePostDto
import com.dinnye.backend.service.interfaces.CaseService
import com.dinnye.backend.service.interfaces.UserService
import com.dinnye.backend.util.IgnoreAuditing
import com.dinnye.backend.util.IgnoreId
import org.mapstruct.Mapper
import org.mapstruct.MappingConstants.ComponentModel
import org.mapstruct.factory.Mappers

@Mapper(componentModel = ComponentModel.SPRING, uses = [InfoDtoMapper::class, UserService::class, CaseService::class])
interface MessageMapper {
    companion object {
        val INSTANCE: MessageMapper = Mappers.getMapper(MessageMapper::class.java)
    }

    fun mapToGet(entity: Message): MessageGetDto

    @IgnoreId
    @IgnoreAuditing
    fun mapFromPost(entity: MessagePostDto): Message
}