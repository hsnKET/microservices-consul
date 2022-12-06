package me.ketlas.customerservice;

import me.ketlas.customerservice.entities.Customer;
import me.ketlas.customerservice.repositories.CustomerRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.util.Arrays;

@SpringBootApplication
public class CustomerServiceApplication {


    public static void main(String[] args) {
        SpringApplication.run(CustomerServiceApplication.class,args);
    }

    @Bean
    CommandLineRunner start(CustomerRepository customerRepository){
        return args -> {
            Arrays.asList("hsn","jwd","hmz","brhm")
                    .forEach(name ->{
                        customerRepository.save(Customer.builder()
                                .email(name.concat("@gmail.com"))
                                .name(name)
                                .build());
                    });
        };
    }
}
