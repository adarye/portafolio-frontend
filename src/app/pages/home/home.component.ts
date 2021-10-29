import { Component, OnInit } from '@angular/core';
import { Preferencia } from 'src/app/models/preferencia.model';
import { ProfileService } from 'src/app/services/service.index';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  obj:Preferencia = {}
  constructor(private profileService:ProfileService) {
    this.profileService.get().subscribe(res=>{
      this.obj = res;
    })
  }

  ngOnInit(): void {
  }

}
