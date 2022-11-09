import { Component, OnInit, Input, OnChanges,
  SimpleChanges } from '@angular/core';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  @Input() idUser = '';

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

    console.log("id" + this.idUser);
    this.getById(this.idUser);

  }

  ngOnChanges(changes: SimpleChanges) {
    console.log("infoChanges: " + changes);
  }
  
  getById(id:any){
    this.appService.getUsuarioById(id)
    .subscribe(
      (data:any)=>{
          this.usuario = data;
      });

  }

}
