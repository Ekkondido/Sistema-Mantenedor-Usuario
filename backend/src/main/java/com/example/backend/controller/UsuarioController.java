package com.example.backend.controller;



import com.example.backend.model.Usuario;
import com.example.backend.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class UsuarioController {

    @Autowired
    private UsuarioRepository repo;

    // LOGIN
    @PostMapping("/login")
    public String login(@RequestBody Usuario usuario) {
        Optional<Usuario> found = repo.findByEmailAndPassword(usuario.getEmail(), usuario.getPassword());
        if (found.isPresent()) {
            return "ok";
        } else {
            return "error";
        }
    }

    // LISTAR
    @GetMapping("/usuarios")
    public List<Usuario> listar() {
        return repo.findAll();
    }

    // CREAR
    @PostMapping("/usuarios")
    public Usuario crear(@RequestBody Usuario usuario) {
        return repo.save(usuario);
    }

    // EDITAR
    @PutMapping("/usuarios/{id}")
    public Usuario editar(@PathVariable Long id, @RequestBody Usuario usuario) {
        usuario.setId(id);
        return repo.save(usuario);
    }

    // ELIMINAR
    @DeleteMapping("/usuarios/{id}")
    public String eliminar(@PathVariable Long id) {
        repo.deleteById(id);
        return "eliminado";
    }
}
