import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {
  dataTable:any=[1,2,3]
  constructor() { }

  ngOnInit(): void {
  }


  trackByFn(index:number,item:any){
    return item.Id_Service
  }
}
