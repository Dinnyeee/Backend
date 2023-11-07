package com.dinnye.backend.db.model

import jakarta.persistence.CascadeType
import jakarta.persistence.Column
import jakarta.persistence.Entity
import jakarta.persistence.FetchType
import jakarta.persistence.JoinColumn
import jakarta.persistence.ManyToOne
import jakarta.persistence.OneToOne
import jakarta.persistence.Table

@Entity
@Table(name = "case")
class Case: BaseEntity() {

    @Column(name = "description", nullable = false)
    val description: String = ""

    @ManyToOne(fetch = FetchType.LAZY, optional = false, cascade = [CascadeType.MERGE])
    @JoinColumn(name = "praxis_id")
    val praxis: Praxis? = null

    @ManyToOne(fetch = FetchType.LAZY, optional = false, cascade = [CascadeType.MERGE])
    @JoinColumn(name = "child_id")
    val child: Child? = null

    @OneToOne(cascade = [CascadeType.ALL])
    @JoinColumn(name = "appointment_id", referencedColumnName = "id")
    val appointment: Appointment? = null
}