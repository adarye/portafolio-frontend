import { Component, OnInit, ViewEncapsulation } from '@angular/core';

//  import '../../assets/plugin-crm/js/custom.min.js'
import { SettingsService } from '../services/crm/settings.service.js';

  declare function init_plugins();

@Component({
  selector: 'app-crm',
  templateUrl: './crm.component.html',
  styleUrls: ['./crm.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class CrmComponent implements OnInit {

  constructor(private settingsService: SettingsService) { }

  ngOnInit(): void {
     init_plugins();
    this.settingsService.checkCurrentTheme();
  }

}
