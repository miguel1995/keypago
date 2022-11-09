import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


const API_URL =  "http://localhost:8080";
const USUARIO_URL = API_URL + "/usuarios"; 

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(
    private http:HttpClient
  ) { 

  }

  getUsiarioAll(){
    return this.http.get(USUARIO_URL);
  
  }
  getUsiarioById(id:any){
    return this.http.get(USUARIO_URL+"/"+id);
  }

  create(usuario:any){
    return this.http.post(USUARIO_URL, usuario);
  }

  update(id:string, usuario:any){
    return this.http.put(USUARIO_URL + "/" + id, usuario);
  }


  delete(id:string){
    return this.http.delete(USUARIO_URL + "/" + id);
  }

}
