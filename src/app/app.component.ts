import { Component, OnInit, ViewEncapsulation } from '@angular/core';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'crm';


  constructor(){
    // init_plugins();
  }
  ngOnInit(): void {


  }
}
