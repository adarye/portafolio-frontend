import { formatDate } from '@angular/common';
import { Component, OnInit, Inject, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Resume } from 'src/app/models/resume';
import { ResumeService } from 'src/app/services/crm/resume.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  form: FormGroup;
  isUpdate: boolean = false;
  beggining_date:Date;
  @Output() get: EventEmitter<any> = new EventEmitter();
  constructor(private fb:FormBuilder, private resumeService:ResumeService, private router: Router, @Inject(MAT_DIALOG_DATA) public data: any, public dialog: MatDialog) {
    this.form = this.fb.group({
      rol: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(80)]],
      description: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(80)]],
      country: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(80)]],
      department: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(80)]],
      city: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(80)]],
      place: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(80)]],
      address: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(80)]],
      beginning_date: ['', [ Validators.required]],
      final_date: ['', [ Validators.required]],
      id_category: ['', [Validators.required, Validators.pattern('^[0-9]{1,2}$')]]
    });
    this.loadForm();
  }

  ngOnInit(): void {
  }
  loadForm() {
    if (this.data.obj.length > 0) {
      this.form.patchValue(this.data.obj[0]);
      this.isUpdate = true;
    }

  }
  submit() {
    console.log(this.form.value)
    this.form.markAsDirty();
    this.form.markAllAsTouched();
    if (this.form.valid) {
      if (this.isUpdate) {
        this.resumeService.updateResume(this.form.value, this.data.obj[0].id).subscribe((res: Resume) => {

        });
      } else {
        this.resumeService.createResume(this.form.value).subscribe((res: any) => {

        });
      }
      this.form.reset();
      this.get.emit(1);
      this.dialog.closeAll();
    }
  }

}
