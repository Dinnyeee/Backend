package com.dinnye.backend.mapper

import com.dinnye.backend.db.model.Message
import com.dinnye.backend.dto.message.MessageGetDto
import com.dinnye.backend.dto.message.MessagePostDto
import com.dinnye.backend.service.interfaces.CaseService
import com.dinnye.backend.service.interfaces.UserService
import com.dinnye.backend.util.IgnoreAuditing
import com.dinnye.backend.util.IgnoreId
import org.mapstruct.Mapper
import org.mapstruct.Mapping
import org.mapstruct.MappingConstants.ComponentModel
import org.mapstruct.factory.Mappers
import org.springframework.beans.factory.annotation.Autowired

@Mapper(componentModel = ComponentModel.SPRING, uses = [CaseService::class])
abstract class MessageMapper {
    companion object {
        val INSTANCE: MessageMapper = Mappers.getMapper(MessageMapper::class.java)
    }

    @Autowired
    protected lateinit var infoDtoMapper: InfoDtoMapper

    @Autowired
    protected lateinit var userService: UserService

    @Mapping(target = "case", expression = "java(infoDtoMapper.map(entity.getCase()))")
    abstract fun mapToGet(entity: Message): MessageGetDto

    @IgnoreId
    @IgnoreAuditing
    @Mapping(target = "user", expression = "java(userService.get(entity.getUserId()))")
    @Mapping(target = "case", source = "caseId")
    abstract fun mapFromPost(entity: MessagePostDto): Message
}