package com.dinnye.backend.db.model

import jakarta.persistence.CascadeType
import jakarta.persistence.Column
import jakarta.persistence.DiscriminatorColumn
import jakarta.persistence.DiscriminatorType
import jakarta.persistence.DiscriminatorValue
import jakarta.persistence.Entity
import jakarta.persistence.EnumType
import jakarta.persistence.Enumerated
import jakarta.persistence.Inheritance
import jakarta.persistence.InheritanceType
import jakarta.persistence.JoinColumn
import jakarta.persistence.OneToOne
import jakarta.persistence.Table

@Entity
@Table(name = "user_table")
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
@DiscriminatorColumn(name = "role", discriminatorType = DiscriminatorType.INTEGER)
abstract class User: BaseEntity() {

    @Column(name = "name", nullable = false)
    var name: String? = null

    @Column(name = "password", nullable = false)
    var password: String? = null

    @Column(name = "email", nullable = false, unique = true)
    var email: String? = null

    @Enumerated(EnumType.ORDINAL)
    @Column(name = "role", nullable = false, updatable = false, insertable = false)
    var role: Role? = null
}

@Entity
@DiscriminatorValue("0")
class Admin: User()

@Entity
@DiscriminatorValue("1")
class Doctor: User() {

    @OneToOne(cascade = [CascadeType.ALL])
    @JoinColumn(name = "praxis_id", referencedColumnName = "id")
    var praxis: Praxis? = null
}

@Entity
@DiscriminatorValue("2")
class Assistant: User() {

    @OneToOne(cascade = [CascadeType.ALL])
    @JoinColumn(name = "praxis_id", referencedColumnName = "id")
    var praxis: Praxis? = null
}

@Entity
@DiscriminatorValue("3")
class Parent: User() {

    @OneToOne(cascade = [CascadeType.ALL])
    @JoinColumn(name = "family_id", referencedColumnName = "id")
    var family: Family? = null
}
