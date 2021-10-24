import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, OnInit, Inject, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ResumeService } from 'src/app/services/crm/resume.service';
import { FunFact } from 'src/app/models/fun-facts';
import { FunFactsService } from 'src/app/services/crm/fun-facts.service';

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
  constructor(private fb:FormBuilder, private funFactService:FunFactsService, private router: Router, @Inject(MAT_DIALOG_DATA) public data: any, public dialog: MatDialog) {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(80)]],
      description: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(80)]],
      icon: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(80)]],
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
        this.funFactService.update(this.form.value, this.data.obj[0].id).subscribe((res: FunFact) => {

        });
      } else {
        this.funFactService.create(this.form.value).subscribe((res: any) => {

        });
      }
      this.form.reset();
      this.get.emit(1);
      this.dialog.closeAll();
    }
  }

}
