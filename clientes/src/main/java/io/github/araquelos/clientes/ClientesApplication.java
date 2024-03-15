package io.github.araquelos.clientes;

import io.github.araquelos.clientes.models.Cliente;
import io.github.araquelos.clientes.repositories.ClienteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class ClientesApplication {

    @Bean
    public CommandLineRunner run(@Autowired ClienteRepository repository) {
        return args -> {
            Cliente cliente = Cliente.builder().cpf("93059337268").nome("Raquel").build();
            repository.save(cliente);
        };
    }
    public static void main(String[] args) {
        SpringApplication.run(ClientesApplication.class, args);
    }
}
