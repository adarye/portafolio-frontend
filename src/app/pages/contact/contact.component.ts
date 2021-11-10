import { ContactService } from './../../services/crm/contact.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Contact } from 'src/app/models/contact';
import { Preferencia } from 'src/app/models/preferencia.model';
import { ProfileService } from 'src/app/services/service.index';
import { SnackbarService } from 'src/app/services/crm/snackbar.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ContactComponent implements OnInit {
  obj: Contact = new Contact('', '', '', '');
  objPreference: Preferencia = {};
  constructor(private profileService: ProfileService, private contactService:ContactService, private snackbarService:SnackbarService) {
    this.profileService.get().subscribe(res => {
      this.objPreference = res;
    })
  }

  ngOnInit(): void {
  }
  save(form: FormGroup) {
    form.controls.name.markAsTouched();
    form.controls.name.markAsDirty();
    if (form.valid) {
      console.log(form.value)
      this.contactService.post(form.value).subscribe(res=>{
       this.snackbarService.openSnackBar('center','bottom',3,'Message Sent Successfully');
       form.reset();
       this.obj = new Contact('', '', '', '');
      })
    }
  }

}
