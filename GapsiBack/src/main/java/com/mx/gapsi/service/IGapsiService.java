package com.mx.gapsi.service;

import java.util.List;
import java.util.UUID;

import com.mx.gapsi.entity.Proveedores;

public interface IGapsiService {
	
	Proveedores save(Proveedores proveedor)throws Exception;
    Boolean delete(UUID id) throws Exception;
    List<Proveedores> getAll()throws Exception;
}
