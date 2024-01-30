package com.mx.gapsi.controller;

import java.util.List;
import java.util.UUID;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.graphql.data.method.annotation.MutationMapping;
import org.springframework.graphql.data.method.annotation.QueryMapping;
import org.springframework.stereotype.Controller;
import org.springframework.graphql.data.method.annotation.Argument;

import org.springframework.web.bind.annotation.RestController;

import com.mx.gapsi.entity.Proveedores;
import com.mx.gapsi.service.IGapsiService;

@Controller
public class GapsiController {

    @Autowired
    private IGapsiService gapsiService;

    private static Logger LOGGER = LoggerFactory.getLogger(GapsiController.class);


    @MutationMapping
    public Proveedores creaProveedor(@Argument Proveedores proveedor) {
    	LOGGER.info("==> Entra a crear proveedor");
        try {
        	proveedor=gapsiService.save(proveedor);
        } catch (Exception exception) {
            LOGGER.error("==> " + exception.getMessage());
        }
        return proveedor;
    }
    
    @QueryMapping
    public List<Proveedores> obtieneProveedores() {
        LOGGER.info("===> Entra a obtiene proveedores");
        List<Proveedores> proveedores = null;
        try {
        	proveedores = gapsiService.getAll();
        } catch (Exception exception) {
            LOGGER.error("===>" + exception.getMessage());
        }
        return proveedores;
    }
    
    @MutationMapping
    public Boolean eliminaProveedor(@Argument UUID proveedorId) {
        LOGGER.info("Entra a elimina proveedor con id : {}", proveedorId);
        Boolean response = null;
        try {
            response = gapsiService.delete(proveedorId);
        } catch (Exception exception) {
            LOGGER.error("===>" + exception.getMessage());
        }
        return response;
    }
}
