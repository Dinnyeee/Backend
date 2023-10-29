package com.dinnye.backend.db.model

import jakarta.persistence.CascadeType
import jakarta.persistence.Column
import jakarta.persistence.Entity
import jakarta.persistence.FetchType
import jakarta.persistence.ManyToOne
import jakarta.persistence.OneToMany
import jakarta.persistence.Table


@Entity
@Table(name = "child")
class Child: BaseEntity() {

    @Column(name = "taj", nullable = false)
    val taj: String? = null

    @Column(name = "name", nullable = false)
    val name: String? = null

    @Column(name = "nickname", nullable = false)
    val nickname: String? = null

    @ManyToOne(fetch = FetchType.LAZY, optional = false, cascade = [CascadeType.MERGE])
    val family: Family? = null

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "child", cascade = [CascadeType.ALL])
    val cases: List<Case> = emptyList()

}