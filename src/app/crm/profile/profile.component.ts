import { Component, OnInit } from '@angular/core';
import { Preferencia } from 'src/app/models/preferencia.model';
import { ProfileService } from 'src/app/services/crm/profile.service';
import './profile.js'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  obj:Preferencia = new Preferencia();
  step:number = 1
  constructor(private profileService: ProfileService) {
    this.profileService.get().subscribe(res=>{
      this.obj = res;
    })
   }

  ngOnInit(): void {
  }

}
