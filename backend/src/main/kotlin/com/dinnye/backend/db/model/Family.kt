package com.dinnye.backend.db.model

import jakarta.persistence.CascadeType
import jakarta.persistence.Column
import jakarta.persistence.Entity
import jakarta.persistence.FetchType
import jakarta.persistence.JoinColumn
import jakarta.persistence.ManyToOne
import jakarta.persistence.OneToMany
import jakarta.persistence.OneToOne
import jakarta.persistence.Table

@Entity
@Table(name = "family")
class Family: BaseEntity() {

    @Column(name = "name", nullable = false)
    var name: String? = null

    @OneToOne(mappedBy = "family", optional = false, cascade = [CascadeType.MERGE])
    var parent: Parent? = null

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "family", cascade = [CascadeType.ALL])
    val children: MutableList<Child> = mutableListOf()

    @ManyToOne(fetch = FetchType.LAZY, optional = true, cascade = [CascadeType.MERGE])
    @JoinColumn(name = "praxis_id")
    var praxis: Praxis? = null
}