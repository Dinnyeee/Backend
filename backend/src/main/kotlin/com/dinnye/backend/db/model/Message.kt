package com.dinnye.backend.db.model

import jakarta.persistence.CascadeType
import jakarta.persistence.Column
import jakarta.persistence.Entity
import jakarta.persistence.FetchType
import jakarta.persistence.JoinColumn
import jakarta.persistence.ManyToOne
import jakarta.persistence.Table

@Entity
@Table(name = "message")
class Message: BaseEntity() {

    @Column(name = "message", nullable = false)
    var message: String? = null

    @ManyToOne(fetch = FetchType.LAZY, optional = false, cascade = [CascadeType.MERGE])
    @JoinColumn(name = "user_id")
    var user: User? = null

    @ManyToOne(fetch = FetchType.LAZY, optional = false, cascade = [CascadeType.MERGE])
    @JoinColumn(name = "case_id")
    var case: Case? = null
}