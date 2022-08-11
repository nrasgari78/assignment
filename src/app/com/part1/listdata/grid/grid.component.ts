import {Component, Input, OnChanges} from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnChanges {
len=new Array
  @Input() cols=new Array()
  @Input() gridData=new Array()

  constructor() { }


  ngOnChanges() {
  if(this.gridData[0]) {
    const l = Object.keys(this.gridData[0]).length
    this.len = Array(l).fill(0).map((x, i) => i + 1);
  }
  }
  trackByFn(index:number,item:any){
    return item.id
  }
}
