package me.ketlas.web;

import me.ketlas.config.ConsulConfiguration;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.context.config.annotation.RefreshScope;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class BillingRestController {

    @Autowired
    private ConsulConfiguration consulConfiguration;

    @GetMapping("/myConfig")
    public ConsulConfiguration getMyConfig(){
        return this.consulConfiguration;
    }
}
