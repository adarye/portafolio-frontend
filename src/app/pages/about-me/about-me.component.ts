import { FunFactsService } from 'src/app/services/crm/fun-facts.service';
import { Component, OnInit } from '@angular/core';
import { Preferencia } from 'src/app/models/preferencia.model';
import { Skill } from 'src/app/models/skill';
import { ProfileService } from 'src/app/services/service.index';
import { SkillsService } from './../../services/crm/skills.service';
import { FunFact } from 'src/app/models/fun-facts';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {
  obj:Preferencia = {};
  listSkills:Skill[] = [];
  funFacts:FunFact[] = [];

  constructor(private profileService:ProfileService, private skillsService:SkillsService, private funfactsService: FunFactsService) {
    this.profileService.get().subscribe(res=>{
      this.obj = res;
    })
    this.skillsService.getSkills().subscribe(res=>{
      this.listSkills = res.data;
    })
    this.funfactsService.get(1).subscribe(res=>{
      this.funFacts = res.data;
    })
   }

  ngOnInit(): void {
  }

}
