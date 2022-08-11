import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import Swal from "sweetalert2";
import {Router} from "@angular/router";
import {Part1Service} from "../../../srv/part1.service";

@Component({
  selector: 'app-formdata',
  templateUrl: './formdata.component.html',
  styleUrls: ['./formdata.component.css']
})
export class FormdataComponent implements OnInit {

    customPatterns = { '0': { pattern: new RegExp('[0-9]')} };
    formData = this.fb.group({
    Date: ['', [Validators.required, Validators.maxLength(9), Validators.pattern("^[0-9]{8}$")]],
    subject: ['', [Validators.required, Validators.maxLength(20)]],
    description: ['', [Validators.maxLength(50)]],
    CUSR28005: ['', [Validators.required, Validators.maxLength(20)]],
    CUSR28006: ['', [Validators.required, Validators.maxLength(20)]],
    RUSR28008: [''],
  })
  inpedit: boolean = true;
  loading: boolean = false;
  selecteditem: string=''

  constructor(private fb: FormBuilder,
              private router: Router,
              private formsrv:Part1Service) {
  }

  ngOnInit(): void {
  }

  denyEdit() {
    this.formData.reset()
    this.loading=false
    this.selecteditem=''

  }

  submitform() {

    this.loading = true
    if (this.formData.get(['Date'])?.errors?.['required']) {
      Swal.fire({icon: 'error', text: '!مقدار تاریخ خالی است'})
    } else if (this.formData.get(['subject'])?.errors?.['required']) {
      Swal.fire({icon: 'error', text: '!مقدار موضوع خالی است'})
    } else if (this.formData.get(['description'])?.errors?.['required']) {
      Swal.fire({icon: 'error', text: '!مقدار نوضیحات خالی است'})
    } else if (this.formData.get(['CUSR28005'])?.errors?.['required']) {
      Swal.fire({icon: 'error', text: '!مقدار نام خالی است'})
    } else if (this.formData.get(['CUSR28006'])?.errors?.['required']) {
      Swal.fire({icon: 'error', text: '!مقدار نام خانوادگی خالی است'})
    } else if (this.formData.get(['CUSR28005'])?.errors?.['maxlength']) {
      Swal.fire({icon: 'error', text: 'طول نام بیشتر از حد مجاز است!'})
    } else if (this.formData.get(['CUSR28006'])?.errors?.['maxlength']) {
      Swal.fire({icon: 'error', text: 'طول نام خانوادگی بیشتر از حد مجاز است!'})
    } else if (this.formData.get(['Date'])?.errors?.['pattern']) {
      Swal.fire({icon: 'error', text: 'تاریخ اشتباه وارد شده ست!'})
    } else
      {
      if (this.inpedit === true) {
        const data = {
          "id": "0",
          "folderId": 201,
          "date": this.formData.get(['Date'])?.value,
          "subject":this.formData.get(['subject'])?.value,
          "description":this.formData.get(['description'])?.value,
          "dynamicParams": [
          {
            "name": "CUSR28005",
            "value":this.formData.get(['CUSR28005'])?.value
          },
          {
            "name": "CUSR28006",
            "value":this.formData.get(['CUSR28006'])?.value
          },
          {
            "name": "RUSR28007",
            "value":this.selecteditem
          },
          {
            "name": "RUSR28008",
            "value":this.formData.get(['RUSR28008'])?.value
          }
        ],
          "workflowSchemeId": 0,
          "workflowInboxId": ""
      }
        this.formsrv.SubmitForm(data).subscribe(res=>{
          console.log(res)
          if(res.success){
            Swal.fire({icon: 'success', text: 'اطلاعات با موفقیت ذخیره شد'})
            this.denyEdit()
          }
        })
      }
    }
  }

  goback() {
    this.router.navigate(['part1'])

  }

}
