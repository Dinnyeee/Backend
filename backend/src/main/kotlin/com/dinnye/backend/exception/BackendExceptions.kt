package com.dinnye.backend.exception

import com.dinnye.backend.db.model.BaseEntity

class BackendExceptions(
    message: String
): Exception("Backend: $message") {

    companion object {
        inline fun <reified T: BaseEntity> entityNotFound(id: Long): BackendExceptions {
            throw BackendExceptions("No ${T::class.simpleName} was found with id: $id")
        }
    }
}