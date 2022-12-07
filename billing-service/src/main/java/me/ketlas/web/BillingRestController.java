package me.ketlas.web;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.cloud.context.config.annotation.RefreshScope;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@RefreshScope
public class BillingRestController {

    @Value("${token.refreshTokenTimeout}")
    private Long refreshTokenTimeout;

    @Value("${token.accessTokenTimeout}")
    private Long accessTokenTimeout;

    @GetMapping("/myConfig")
    public Map<String,Object> getMyConfig(){
        return Map.of("refreshTokenTimeout",refreshTokenTimeout,"accessTokenTimeout",accessTokenTimeout);
    }
}
