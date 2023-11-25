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
    var taj: String? = null

    @Column(name = "name", nullable = false)
    var name: String? = null

    @Column(name = "nickname", nullable = false)
    var nickname: String? = null

    @ManyToOne(fetch = FetchType.LAZY, optional = false, cascade = [CascadeType.MERGE])
    var family: Family? = null

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "child", cascade = [CascadeType.ALL])
    val cases: MutableList<Case> = mutableListOf()

}