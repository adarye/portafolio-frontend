import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, OnInit, Output, EventEmitter, Input, OnChanges, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { Paginate } from 'src/app/models/paginate';
import { Skill } from 'src/app/models/skill';
import { SkillCategory } from 'src/app/models/skill-category';
import { SkillsService } from 'src/app/services/crm/skills.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Output() get: EventEmitter<any> = new EventEmitter();
  form: FormGroup
  isUpdate: boolean = false;
  categories: SkillCategory[] = [];

  constructor(public dialog: MatDialog, private readonly fb: FormBuilder, private skillService: SkillsService, private router: Router, @Inject(MAT_DIALOG_DATA) public data: any) {
    this.getCategories();
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(80)]],
      description: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(80)]],
      level: ['', [Validators.required, Validators.pattern('^[0-9]{1,2}$')]],
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

  getCategories() {
    this.skillService.getCategories().subscribe((res: Paginate) => {
      this.categories = res.data;
    });
  }
  submit() {
    this.form.markAsDirty();
    this.form.markAllAsTouched();
    if (this.form.valid) {
      if (this.isUpdate) {
        this.skillService.updateSkill(this.form.value, this.data.obj[0].id).subscribe((res: Skill) => {

        });
      } else {
        this.skillService.createSkill(this.form.value).subscribe((res: any) => {

        });
      }
      this.form.reset();
      this.get.emit(1);
      this.dialog.closeAll();
    }
  }
  getQueries() {
    return this.router.events
      .pipe(filter((event) => event instanceof ActivationEnd))
      .pipe(filter((event: ActivationEnd) => event.snapshot.firstChild === null)).pipe
      (map((event: ActivationEnd) => event.snapshot.queryParams));
  }
}


