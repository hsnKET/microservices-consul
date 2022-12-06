package me.ketlas.inventoryservice.entities;


import org.springframework.data.rest.core.config.Projection;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Projection(name = "fullProduct",types = Product.class)
public interface ProductProjection {

    Long getId();
    String getName();
    int getQuantity();
    double getPrice();

}
