import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {Part1Service} from "../../../../srv/part1.service";
import {debounceTime, map, Observable, tap} from "rxjs";

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
  @Output() eventselecteditem=new EventEmitter<string>()
  @Input() selected:string=''
  constructor(private fb: FormBuilder,
              private codingsrv:Part1Service) { }

  ngOnInit(): void {
    this.CodingData=this.codingsrv.GetCoding('').pipe(
      map(res=>res.data),
    )
      this.formCoding.get(['search'])?.valueChanges.pipe(
     debounceTime(200),
     tap(res=>console.log(res)),
     map(value=>this.codingsrv.GetCoding(value).pipe(
       map(res=> res.data)
         )),
       map(res=>this.CodingData=res),
     ).subscribe()

      }

  selectlst(item:any) {
      this.eventselecteditem.emit(item)
    this.selected=item

  }
}
