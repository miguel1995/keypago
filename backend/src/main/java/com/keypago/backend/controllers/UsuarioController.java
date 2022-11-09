package com.keypago.backend.controllers;


import com.keypago.backend.models.Usuario;
import com.keypago.backend.repositories.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/usuarios")
public class UsuarioController {

    @Autowired
    private UsuarioRepository usuarioRepository;

    @GetMapping("")
    List<Usuario> index(){
        return usuarioRepository.findAll();
    }

    @GetMapping("{id}")
    Usuario findById(@PathVariable String id){
        Usuario usuarioFromDb = usuarioRepository.findById(id).orElseThrow(RuntimeException::new);
        return usuarioFromDb;
    }

        @ResponseStatus(HttpStatus.CREATED)
    @PostMapping("")
    Usuario create(@RequestBody Usuario usuario){
        return usuarioRepository.save(usuario);
    }

    @PutMapping("{id}")
    Usuario update(@PathVariable String id, @RequestBody Usuario usuario){
        Usuario usuarioFromDb = usuarioRepository.findById(id).orElseThrow(RuntimeException::new);

        //usuarioFromDb.setNumeroIdentificacion(usuario.getNumeroIdentificacion());
        usuarioFromDb.setTipoIdentificacion(usuario.getTipoIdentificacion());
        usuarioFromDb.setFechaNacimiento(usuario.getFechaNacimiento());
        usuarioFromDb.setEdad(usuario.getEdad());
        usuarioFromDb.setTelefono(usuario.getTelefono());
        usuarioFromDb.setCorreo(usuario.getCorreo());
        usuarioFromDb.setPassword(usuario.getPassword());

        return usuarioRepository.save(usuarioFromDb);

    }

    @ResponseStatus(HttpStatus.NO_CONTENT)
    @DeleteMapping("{id}")
    void delete(@PathVariable String id){
        Usuario usuario = usuarioRepository.findById(id).orElseThrow(RuntimeException::new);
        usuarioRepository.delete(usuario);
    }

}
