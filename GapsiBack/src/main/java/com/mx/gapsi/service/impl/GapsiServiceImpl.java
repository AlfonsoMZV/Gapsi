package com.mx.gapsi.service.impl;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.graphql.data.method.annotation.SchemaMapping;
import org.springframework.stereotype.Service;

import com.mx.gapsi.entity.Proveedores;
import com.mx.gapsi.repository.IGapsiRepository;
import com.mx.gapsi.service.IGapsiService;

@Service
public class GapsiServiceImpl implements IGapsiService{

	private static Logger LOGGER= LoggerFactory.getLogger(GapsiServiceImpl.class);

    @Autowired
    private IGapsiRepository gapsiRepository;
    
    @SchemaMapping
	@Override
	public Proveedores save(Proveedores proveedor) throws Exception {
    	Proveedores prov = null;
		prov  = gapsiRepository.save(proveedor);
        if (prov == null) {
            throw new Exception("===> Error creando proveedor");
        }
        LOGGER.info("Proveedor guardado");
        return proveedor;
	}

    @SchemaMapping
	@Override
	public Boolean delete(UUID id) throws Exception {
		Optional<Proveedores> proveedorList = gapsiRepository.findById(id);
	    Boolean response = Boolean.FALSE;
	    
	    if(proveedorList != null) {
	    	gapsiRepository.deleteById(id);
	    	response = Boolean.TRUE;
	     }else{
	        throw new Exception("Error al eliminar proveedor");
	     }
	     LOGGER.info("Se elimino el proveedor correctamente");
	     return response;
	}

    @SchemaMapping
	@Override
	public List<Proveedores> getAll() throws Exception {
		List<Proveedores> provedoores = gapsiRepository.findAll();
	    if (provedoores == null) {
	        throw new Exception("No se encontrarón proveedores");
	    }
	    return provedoores;
	}

}
