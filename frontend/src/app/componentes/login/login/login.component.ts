import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  cedulaMsg = "";
  cedula = "";
  password="";
  isUsuario = false;
  usuario = {
    numeroIdentificacion:"",
    tipoIdentificacion: "",
    fechaNacimiento:new Date(),
    edad:0,
    telefono:"",
    correo:"",
    password:""
  }



  constructor(
    private appService: AppService
  ) { }

  ngOnInit(): void {

  }

  iniciarSesion(){
    console.log(this.cedula);
    this.appService.getUsuarioById(this.cedula)
    .subscribe(
      (data:any)=>{


          if(data.numeroIdentificacion){
            this.usuario = data;

            if(this.usuario.password == this.password){
              this.isUsuario = true;
            }else{
              this.cedulaMsg ="Contraseña incorrecta";  
            }
            
            
          }else{
            this.cedulaMsg ="NOTA: El usuario no se encuentra registrado en la Base de datos"
          }
          
      }  , err => {
        // Entra aquí si el servicio entrega un código http de error EJ: 404, 
        500
        console.log(err)
        this.cedulaMsg ="NOTA: El usuario no se encuentra registrado en la Base de datos"
    });
  }

  cerrarSesion(){

    this.isUsuario = false;
  }

}
