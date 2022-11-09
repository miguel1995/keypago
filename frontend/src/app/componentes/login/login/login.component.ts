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
    this.appService.getUsiarioById(2)
    .subscribe(
      (data:any)=>{

          if(data.numeroIdentificacion){
            this.usuario = data;

            if(this.usuario.password == this.password){
              this.isUsuario = true;
            }
            
            
          }else{
            this.cedulaMsg ="El usuario no se encuentra registrado en la Base de datos"
          }
          
      });
  }

}
