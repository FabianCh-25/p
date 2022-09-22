import { Calificacion } from './../../../module/calificacion';
import { CalificacionService } from './../../../service/calificacion.service';
import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-calificacion-listar',
  templateUrl: './calificacion-listar.component.html',
  styleUrls: ['./calificacion-listar.component.css']
})
export class CalificacionListarComponent implements OnInit {
  lista:Calificacion[]=[];
  dataSource:MatTableDataSource<Calificacion>=new MatTableDataSource();
  displayedColumns:string[]=['id', 'calificacion' , 'idTrainer']
  constructor(private pService:CalificacionService) { }

  ngOnInit(): void {
    this.pService.listar().subscribe(data=>{
      this.dataSource=new MatTableDataSource(data);
    })

  }
}
