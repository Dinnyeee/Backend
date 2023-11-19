package com.dinnye.backend.mapper

interface CommonMapper<E, GET, POST, PUT> {

    fun mapToGet(entity: E): GET
    fun mapToPost(entity: E): POST
    fun mapToPut(entity: E): PUT

    fun mapFromPost(entity: POST): E
    fun mapFromPut(entity: PUT): E
}