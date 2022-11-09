package com.keypago.backend.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import java.util.Date;

@Document
public class Usuario {
    @Id
    private String numeroIdentificacion;
    @Field
    private String tipoIdentificacion;
    @Field
    private Date fechaNacimiento;
    @Field
    private Integer edad;
    @Field
    private String telefono;
    @Field
    private String correo;
    @Field
    private String password;
    public Usuario() {

    }

    public Usuario(String tipoIdentificacion, Date fechaNacimiento, Integer edad, String telefono, String correo, String password) {
        this.tipoIdentificacion = tipoIdentificacion;
        this.fechaNacimiento = fechaNacimiento;
        this.edad = edad;
        this.telefono = telefono;
        this.correo = correo;
        this.password = password;
    }

    public String getNumeroIdentificacion() {
        return numeroIdentificacion;
    }

    public void setNumeroIdentificacion(String numeroIdentificacion) {
        this.numeroIdentificacion = numeroIdentificacion;
    }

    public String getTipoIdentificacion() {
        return tipoIdentificacion;
    }

    public void setTipoIdentificacion(String tipoIdentificacion) {
        this.tipoIdentificacion = tipoIdentificacion;
    }

    public Date getFechaNacimiento() {
        return fechaNacimiento;
    }

    public void setFechaNacimiento(Date fechaNacimiento) {
        this.fechaNacimiento = fechaNacimiento;
    }

    public Integer getEdad() {
        return edad;
    }

    public void setEdad(Integer edad) {
        this.edad = edad;
    }

    public String getTelefono() {
        return telefono;
    }

    public void setTelefono(String telefono) {
        this.telefono = telefono;
    }

    public String getCorreo() {
        return correo;
    }

    public void setCorreo(String correo) {
        this.correo = correo;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    @Override
    public String toString() {
        return "Usuario{" +
                "numeroIdentificacion='" + numeroIdentificacion + '\'' +
                ", tipoIdentificacion='" + tipoIdentificacion + '\'' +
                ", fechaNacimiento=" + fechaNacimiento +
                ", edad=" + edad +
                ", telefono='" + telefono + '\'' +
                ", correo='" + correo + '\'' +
                ", password'" + password + '\'' +
                '}';
    }
}
