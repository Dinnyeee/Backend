package com.dinnye.backend.db.model

enum class Role {
    ADMIN,
    DOCTOR,
    ASSISTANT,
    PARENT,
}

enum class Priority(private val value: String) {
    HIGH("High"),
    MEDIUM("Medium"),
    LOW("Low"),
}

enum class Status(private val value: String) {
    NEW("New"),
    IN_PROGRESS("InProgress"),
    DONE("Done"),
}