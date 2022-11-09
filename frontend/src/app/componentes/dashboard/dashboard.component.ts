import { Component, OnInit } from '@angular/core';

import { faPencilSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  usuarioList:any[] = [];
  faPencilSquare = faPencilSquare;
  faTrash = faTrash;
  isEdit = false;
  newUsuario = {
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
  ){}

  ngOnInit():void{
    this.getAll();
  }

  getAll(){
    this.appService.getUsiarioAll()
    .subscribe(
      (data:any)=>{
          this.usuarioList = data;
      });

  }

  create(){

    this.appService.create(this.newUsuario)
    .subscribe(()=>{
      this.getAll();

      this.newUsuario = {

        numeroIdentificacion: "",
        tipoIdentificacion: "",
        fechaNacimiento:new Date(),
        edad:0,
        telefono:"",
        correo:"",
        password:""

      }
    });

  }

  save(){
    this.appService.update(this.newUsuario.numeroIdentificacion, this.newUsuario)
    .subscribe(()=>{
      this.getAll();

      this.newUsuario = {

        numeroIdentificacion: "",
        tipoIdentificacion: "",
        fechaNacimiento:new Date(),
        edad:0,
        telefono:"",
        correo:"",
        password:""

      }
    });

  }

  edit(usuario:any){

    this.isEdit = true;

    this.newUsuario = {
      ...usuario
    };
    
    
  }

  delete(usuario:any){
    this.appService.delete(usuario.numeroIdentificacion)
    .subscribe(()=>{
      this.getAll();
    })
  }

}
