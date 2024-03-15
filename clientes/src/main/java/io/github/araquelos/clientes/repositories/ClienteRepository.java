package io.github.araquelos.clientes.repositories;

import io.github.araquelos.clientes.models.Cliente;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ClienteRepository extends JpaRepository<Cliente, Integer> {

}
