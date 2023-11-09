package com.dinnye.backend.db.model

import jakarta.persistence.CascadeType
import jakarta.persistence.Column
import jakarta.persistence.Entity
import jakarta.persistence.FetchType
import jakarta.persistence.OneToMany
import jakarta.persistence.OneToOne
import jakarta.persistence.Table

@Entity
@Table(name = "praxis")
class Praxis: BaseEntity() {

    @Column(name = "name", nullable = false)
    var name: String? = null

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "praxis", cascade = [CascadeType.PERSIST,
        CascadeType.MERGE,
        CascadeType.REMOVE,
        CascadeType.REFRESH,
        CascadeType.DETACH]
    )
    val families: List<Family> = emptyList()

    @OneToOne(mappedBy = "praxis", cascade = [CascadeType.MERGE])
    var doctor: Doctor? = null

    @OneToOne(mappedBy = "praxis", cascade = [CascadeType.MERGE])
    var assistant: Assistant? = null

    @OneToMany(mappedBy = "praxis", fetch = FetchType.LAZY, cascade = [CascadeType.ALL])
    val cases: List<Case> = emptyList()
}