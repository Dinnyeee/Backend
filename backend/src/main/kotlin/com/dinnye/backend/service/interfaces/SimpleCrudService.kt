package com.dinnye.backend.service.interfaces

interface SimpleCrudService<T> {
    fun create(entity: T): T
    fun get(id: Long): T
    fun getAll(): List<T>
    fun update(entity: T): T
    fun delete(id: Long);
}