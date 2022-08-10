import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {Part1Service} from "../../../../srv/part1.service";
import {debounceTime, map, Observable} from "rxjs";

@Component({
  selector: 'app-coding-get-list',
  templateUrl: './coding-get-list.component.html',
  styleUrls: ['./coding-get-list.component.css']
})
export class CodingGetListComponent implements OnInit {
  @ViewChild('selectList', { static: false }) selectList: ElementRef | undefined ;

  CodingData: Observable<any> | undefined
  formCoding = this.fb.group({
    RUSR28007: [''],
    search:['']
  })
  filterText$?: Observable<any>

  constructor(private fb: FormBuilder,
              private codingsrv:Part1Service) { }

  ngOnInit(): void {
   this.filterText$= this.formCoding.get(['search'])?.valueChanges.pipe(debounceTime(200),
      map(value=>{return value}
      ))
    console.log(this.filterText$ |async )
        this.CodingData=this.codingsrv.GetCoding(this.filterText$| async )






          // this.CodingData=res['data']
          // if(this.filterText!='')
          //   // @ts-ignore
          //   this.selectList.nativeElement.size = this.CodingData.length + 1;
          // else
          // { // @ts-ignore
          //   this.selectList.nativeElement.size = 0;
          // }




      }

}
