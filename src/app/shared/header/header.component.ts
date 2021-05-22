import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  mobile:boolean = true;
  constructor() { }

  ngOnInit(): void {
  }
  mobileMenu(){
    // console.log('entre');
    this.mobile = !this.mobile
    console.log(this.mobile);
  }

}
