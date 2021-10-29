import { Component, OnInit } from '@angular/core';
import { Preferencia } from 'src/app/models/preferencia.model';
import { Skill } from 'src/app/models/skill';
import { ProfileService } from 'src/app/services/service.index';
import { SkillsService } from './../../services/crm/skills.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {
  obj:Preferencia = {};
  listSkills:Skill[] = [];
  constructor(private profileService:ProfileService, private skillsService:SkillsService) {
    this.profileService.get().subscribe(res=>{
      this.obj = res;
    })
    this.skillsService.getSkills().subscribe(res=>{
      this.listSkills = res.data;
    })
   }

  ngOnInit(): void {
  }

}
