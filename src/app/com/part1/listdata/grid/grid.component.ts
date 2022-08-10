import {Component, Input, OnChanges, OnInit} from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnChanges {
len:any
  @Input() cols=new Array()
@Input() gridData=new Array()

  constructor() { }


  ngOnChanges() {
  console.log(this.gridData)
  if(this.gridData[0]) {

    const l = Object.keys(this.gridData[0]).length
    console.log(l)
    this.len = Array(l).fill(0).map((x, i) => i + 1);
console.log(this.len)
  }
  }
  trackByFn(index:number,item:any){
    return item.Id_Service
  }
}
