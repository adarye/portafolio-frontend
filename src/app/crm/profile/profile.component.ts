import { Component, OnInit } from '@angular/core';
import { Preferencia } from 'src/app/models/preferencia.model';
import { ProfileService } from 'src/app/services/crm/profile.service';
import './profile.js'
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  obj: Preferencia = new Preferencia();
  step: number = 1
  form: FormGroup;
  constructor(private profileService: ProfileService) {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      facebook: new FormControl('', [Validators.required]),
      instagram: new FormControl('', [Validators.required]),
      linkedin: new FormControl('', [Validators.required]),
      twitter: new FormControl(''),
      youtube: new FormControl(''),
      whatsapp: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(50), Validators.pattern('^[a-zA-Z ]+$')]),
      username: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(50), Validators.pattern('^[a-zA-Z ]+$')]),
      age: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{1,2}$')]),
      residence: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(50), Validators.pattern('^[a-zA-Z ]+$')]),
      address: new FormControl(''),
      rol: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(50), Validators.pattern('^[a-zA-Z ]+$')]),
      about_me: new FormControl('', [Validators.required, Validators.minLength(40), Validators.maxLength(600)]),
      // make a form control for a pdf file
      cv: new FormControl('', [Validators.pattern('^.*\.pdf$')])

    });
    this.profileService.get().subscribe(res => {
      if (res) {
        this.obj = res;
        this.form.patchValue(this.obj);
      }
      else {
        this.form.reset();
        this.form.markAsPristine();
      }
    })


  }

  ngOnInit(): void {


  }
  post() {
    // this.step = 1
    console.log(this.form)
    this.obj = this.form.value;
    if (this.form.valid) {
      this.profileService.post(this.obj).subscribe(res => {
         this.step = 4;
      })
    }


  }
  get about_me() {
    return this.form.get('about_me');
  }



}
