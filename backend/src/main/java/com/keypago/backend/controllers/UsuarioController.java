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

        return usuarioRepository.save(usuarioFromDb);

    }

}
