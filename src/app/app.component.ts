import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SettingsService } from './services/crm/settings.service';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'crm';


  constructor(private settingsService:SettingsService){
    // init_plugins();
    this.settingsService.csrfCookie().subscribe(res=>{
      console.log(res);
    })
  }
  ngOnInit(): void {


  }
}
