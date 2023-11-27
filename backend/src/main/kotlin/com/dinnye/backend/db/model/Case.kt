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
@Table(name = "case_table")
class Case: BaseEntity() {

    @Column(name = "description", nullable = false)
    var description: String? = null

    @Column(name = "title", nullable = false)
    var title: String? = null

    @Column(name = "priority", nullable = false)
    var priority: Priority = Priority.LOW

    @Column(name = "status", nullable = false)
    var status: Status = Status.NEW

    @ManyToOne(fetch = FetchType.LAZY, optional = false, cascade = [CascadeType.MERGE])
    @JoinColumn(name = "praxis_id")
    var praxis: Praxis? = null

    @ManyToOne(fetch = FetchType.LAZY, optional = false, cascade = [CascadeType.MERGE])
    @JoinColumn(name = "child_id")
    var child: Child? = null

    @OneToOne(cascade = [CascadeType.ALL])
    @JoinColumn(name = "appointment_id", referencedColumnName = "id")
    var appointment: Appointment? = null
}