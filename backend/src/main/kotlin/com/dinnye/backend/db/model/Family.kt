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
    val name: String? = null

    @OneToOne(mappedBy = "family", optional = false, cascade = [CascadeType.MERGE])
    val parent: Parent? = null

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "family", cascade = [CascadeType.ALL])
    val children: List<Child> = emptyList()

    @ManyToOne(fetch = FetchType.LAZY, optional = true, cascade = [CascadeType.MERGE])
    @JoinColumn(name = "praxis_id")
    val praxis: Praxis? = null
}