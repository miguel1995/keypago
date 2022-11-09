import { Component, OnInit, Input, OnChanges,
  SimpleChanges} from '@angular/core';

import { faPencilSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import { AppService } from 'src/app/app.service';

const CryptoJS = require("crypto-js");

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnChanges {


  @Input() idUser = '';

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

  passMsg = "";


  constructor(
    private appService: AppService
  ){}

  ngOnInit():void{
    this.getAll();
    
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }

  getAll(){
    this.appService.getUsuarioAll()
    .subscribe(
      (data:any)=>{
          this.usuarioList = data;
      });

  }


  cryptoPass(str:any){

    
    let hash = CryptoJS.MD5(str).toString();
    console.log(hash);
    return hash;

  }

  create(){

    



    if(this.validatePassword(this.newUsuario.password)){

      this.newUsuario.password = this.cryptoPass(this.newUsuario.password);
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


    }else{
      this.passMsg = "Contraseña NO Valida, debe contener Al menos una mayúscula, Un carácter especial ( # & * ), Un número, Longitud mínima de 8.";
    }

    
  }

  save(){

    if(this.validatePassword(this.newUsuario.password)){

      this.newUsuario.password = this.cryptoPass(this.newUsuario.password);

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


    }else{
      this.passMsg = "Contraseña NO Valida, debe contener Al menos una mayúscula, Un carácter especial ( # & * ), Un número, Longitud mínima de 8.";
    }


  

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

  validatePassword(password:any){

    //validar longitud contraseña
    if ( password.length > 7 && password.match(/[^0-9]/) &&  password.match(/[^\#\&\*]/) && password.match(/[^A-Z]/)) {
      console.log("Si pasa");
        return true;
    }else{
      console.log("No pasa");
      return false;
    }
 
 }

}
