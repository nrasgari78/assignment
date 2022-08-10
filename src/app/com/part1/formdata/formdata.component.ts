import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import Swal from "sweetalert2";
import {Router} from "@angular/router";

@Component({
  selector: 'app-formdata',
  templateUrl: './formdata.component.html',
  styleUrls: ['./formdata.component.css']
})
export class FormdataComponent implements OnInit {

  formData = this.fb.group({
    Date: ['', [Validators.required]],
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
              private router: Router) {
  }

  ngOnInit(): void {
  }

  denyEdit() {

  }

  submitform() {
    console.log(this.selecteditem)

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
    } else {
      if (this.inpedit === true) {
        const data = {
          "id": "0",
          "folderId": 201,
          "date": "14010501",
          "subject":'',
          "description":'',
          "dynamicParams": [
          {
            "name": "CUSR28005",
            "value":''
          },
          {
            "name": "CUSR28006",
            "value":''
          },
          {
            "name": "RUSR28007",
            "value":''
          },
          {
            "name": "RUSR28008",
            "value":''
          }
        ],
          "workflowSchemeId": 0,
          "workflowInboxId": ""
      }

      }
    }
  }

  goback() {
    this.router.navigate(['part1'])

  }

}
