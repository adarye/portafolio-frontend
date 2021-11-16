import { ProfileService } from './../../services/crm/profile.service';
import { Component, OnInit } from '@angular/core';
import { Preferencia } from 'src/app/models/preferencia.model';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

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
  urlFiles = environment.urlFiles;
  listRoutes:any[] = [
    '/cv/home',
    '/cv/about-me',
    '/cv/resume',
    '/cv/portafolio',
    '/cv/contact',
    '/cv/blog',
  ]
  constructor(private profileService:ProfileService, private router:Router) {
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
  nextRoute(){
    let index = this.listRoutes.indexOf(this.router.url);
    if(index < this.listRoutes.length - 1){
      this.router.navigate([this.listRoutes[index + 1]]);
    }else{
      this.router.navigate([this.listRoutes[0]]);
    }
  }
  prevRoute(){
    let index = this.listRoutes.indexOf(this.router.url);
    if(index > 0){
      this.router.navigate([this.listRoutes[index - 1]]);
    }else{
      this.router.navigate([this.listRoutes[this.listRoutes.length - 1]]);
    }
  }

}
