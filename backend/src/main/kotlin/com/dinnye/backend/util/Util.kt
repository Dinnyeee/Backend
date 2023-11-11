package com.dinnye.backend.util

import com.dinnye.backend.db.model.BaseEntity
import com.dinnye.backend.exception.BackendExceptions
import org.springframework.data.jpa.repository.JpaRepository
import java.util.*

inline fun <reified T: BaseEntity> Optional<T>.throwWhenNotFound(id: Long): T {
    return this.orElseThrow { BackendExceptions.entityNotFound<T>(id) }
}

inline fun <reified T: BaseEntity> JpaRepository<T, Long>.findByIdOrThrow(id: Long): T {
    return this.findById(id).throwWhenNotFound(id)
}

inline fun <reified T: BaseEntity> JpaRepository<T, Long>.update(id: Long, update: T.() -> Unit): T {
    val entity = this.findByIdOrThrow(id)
    entity.update()
    return this.saveAndFlush(entity)
}

