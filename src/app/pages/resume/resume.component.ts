import { Component, OnInit } from '@angular/core';
import { CategoriesWithResumes } from 'src/app/models/categories-with-resume';
import { CategoriesWithSkills } from 'src/app/models/categories-with-skills';
import { Resume } from 'src/app/models/resume';
import { Skill } from 'src/app/models/skill';
import { ResumeService } from 'src/app/services/crm/resume.service';
import { SkillsService } from 'src/app/services/crm/skills.service';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {
  listResume: CategoriesWithResumes[] = [];
  listSkills:CategoriesWithSkills[] = [];
  constructor(private resumeService: ResumeService, private skillsService:SkillsService) {
    this.resumeService.getCategoriesWithResumes().subscribe(
      res => {
        this.listResume = res;

      });
      this.skillsService.getSkillsWithCategories().subscribe(
        res => {
          this.listSkills = res;
        });
  }
  ngOnInit(): void {
  }

}
