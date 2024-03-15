package io.github.araquelos.clientes.repositories;

import io.github.araquelos.clientes.models.Servico;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ServicoRepository extends JpaRepository<Servico, Integer> {
}
