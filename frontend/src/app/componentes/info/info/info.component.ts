import { Component, OnInit } from '@angular/core';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  usuario = {
    numeroIdentificacion:"",
    tipoIdentificacion: "",
    fechaNacimiento:new Date(),
    edad:0,
    telefono:"",
    correo:"",
    password:""

  }
  faPlay = faPlay;


  constructor(
    private appService: AppService
  ) { }

  ngOnInit(): void {

    this.getById();

  }

  
  getById(){
    this.appService.getUsiarioById(2)
    .subscribe(
      (data:any)=>{
          this.usuario = data;
      });

  }

}
