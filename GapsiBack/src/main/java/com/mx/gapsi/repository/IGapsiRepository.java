package com.mx.gapsi.repository;

import org.springframework.stereotype.Repository;

import com.mx.gapsi.entity.Proveedores;

import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;

@Repository
public interface IGapsiRepository extends JpaRepository<Proveedores, UUID> {

}