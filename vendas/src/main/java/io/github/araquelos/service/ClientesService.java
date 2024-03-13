package io.github.araquelos.service;
import io.github.araquelos.model.Cliente;
import io.github.araquelos.repository.ClientesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ClientesService {

    private ClientesRepository repository;

    @Autowired
    public ClientesService (ClientesRepository repository) {
        this.repository = repository;
    }

    public void salvarCliente (Cliente cliente) {
        validarCliente(cliente);
        this.repository.salvar(cliente);
    }

    public void validarCliente (Cliente cliente) {
        //Aplica Validações
    }

}
