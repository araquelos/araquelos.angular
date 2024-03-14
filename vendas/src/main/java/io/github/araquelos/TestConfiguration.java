package io.github.araquelos;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class TestConfiguration {

    @Bean(name="applicationName")
    public String applicationName() {
        return "Sistema de Vendas";
    }
}
