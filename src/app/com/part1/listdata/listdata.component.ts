import { Component, OnInit } from '@angular/core';
import {Part1Service} from "../../../srv/part1.service";

@Component({
  selector: 'app-listdata',
  templateUrl: './listdata.component.html',
  styleUrls: ['./listdata.component.css']
})
export class ListdataComponent implements OnInit {
  gridData:any
  cols=new Array()
data=new Array()
  constructor(private griddata:Part1Service) { }

  ngOnInit(): void {
    this.griddata.GetGrid().subscribe(res=>{
      console.log(res)
      if(res) {
        res.data.columns.forEach((item: any) => {
          this.cols.push({'header': item.header,'key':item.field})
        })
        this.gridData=  res.data.data
        console.log(this.gridData)

        this.gridData.forEach((item:any)=>{

            this.data.push({'0':item.radif,'1':item.date, '2':item.stateName,
              '3':item.identityName,'4':item.CUSR28005,'5':item.CUSR28006,'6':item.RUSR28007,'7':item.RUSR28008})

        })
              console.log(this.data)

          // this.cols.forEach((i: any,index) => {
          //   console.log(index)
          //     this.gridData.forEach((item: any) => {
          //       this.data.push({index: item[i.key]})
          //       console.log(this.data)
          //
          //     })
          //
          // })
      }
    })

  }

}
