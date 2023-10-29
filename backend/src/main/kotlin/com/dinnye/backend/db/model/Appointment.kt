package com.dinnye.backend.db.model

import jakarta.persistence.CascadeType
import jakarta.persistence.Column
import jakarta.persistence.Entity
import jakarta.persistence.OneToOne
import jakarta.persistence.Table
import java.util.*


@Entity
@Table(name = "appointment")
class Appointment: BaseEntity() {

    @Column(name = "date")
    val date: Date? = null

    @OneToOne(mappedBy = "appointment", optional = false, cascade = [CascadeType.MERGE])
    val case: Case? = null
}