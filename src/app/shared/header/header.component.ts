import { ProfileService } from './../../services/crm/profile.service';
import { Component, OnInit } from '@angular/core';
import { Preferencia } from 'src/app/models/preferencia.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  mobile:boolean = true;
  obj:Preferencia = {}
  date:Date;
  dateFormat:string;
  constructor(private profileService:ProfileService) {
    this.date = new Date();
    // this.dateFormat = this.datepipe.transform(this. date, 'yyyy');
    this.profileService.get().subscribe(res=>{
      this.obj = res;
    })
  }

  ngOnInit(): void {
  }
  mobileMenu(){
    // console.log('entre');
    this.mobile = !this.mobile
    console.log(this.mobile);
  }

}
