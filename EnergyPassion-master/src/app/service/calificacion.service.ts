import { TrainerListarComponent } from './../page/trainer/trainer-listar/trainer-listar.component';

import { environment } from "src/environments/environment";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Calificacion } from "../module/calificacion";

@Injectable({

    providedIn:'root'
})
export class CalificacionService{
    private url:string= `${environment.host_4}`;
    constructor(private http:HttpClient){}
    listar(){
        return this.http.get<Calificacion[]>(this.url)
    }
}