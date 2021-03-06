import { ElementRef } from '@angular/core';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { Paginate } from 'src/app/models/paginate';
import { Skill } from 'src/app/models/skill';
import { SnackbarService } from 'src/app/services/crm/snackbar.service';
import { SkillsService } from './../../../services/crm/skills.service';
import { FormComponent } from './form/form.component';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {

  paginate: Paginate = {};
  obj: Skill[] = [];
  enableForm: boolean = false;
  @ViewChild('openModal') openModal: ElementRef;

  constructor(private skillService: SkillsService, private router: Router, private dialog: MatDialog, private snackbarService:SnackbarService) {
    this.getQueries().subscribe((data) => {
      // data.page = 5;
      this.get(data.page);
    })
  }

  ngOnInit(): void {
  }
  get(page: number) {
    this.skillService.getSkills(page).subscribe((res: Paginate) => {
      this.paginate = res;
    });
  }
  goPage(page: number) {
    this.router.navigate(['crm/skills'], { queryParams: { page: page } });
  }
  showForm() {
    const dialogRef = this.dialog.open(FormComponent, {
      height: '250px',
      width: '600px',
      data: { obj: this.obj }

    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.get(this.paginate.current_page);
    });
  }
  deleteSkill() {
    this.skillService.deleteSkill(this.obj[0].id).subscribe((res) => {
      this.snackbarService.openSnackBar('end', 'top', 5, 'Skill deleted successfully');
      this.get(this.paginate.current_page);
    }
    );
  }
  getQueries() {
    return this.router.events
      .pipe(filter((event) => event instanceof ActivationEnd))
      .pipe(filter((event: ActivationEnd) => event.snapshot.firstChild === null)).pipe
      (map((event: ActivationEnd) => event.snapshot.queryParams));
  }

}
