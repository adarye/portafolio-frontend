import { filter, map } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { ResumeService } from 'src/app/services/crm/resume.service';
import { FormComponent } from './form/form.component';
import { MatDialog } from '@angular/material/dialog';
import { SnackbarService } from 'src/app/services/crm/snackbar.service';
import { Paginate } from 'src/app/models/paginate';
import { Resume } from 'src/app/models/resume';
import { ActivationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  paginate: Paginate = {};
obj:Resume[] = [];

  constructor(private resumeService: ResumeService, private dialog: MatDialog, private snackbarService:SnackbarService, private router: Router) {
    this.getQueries().subscribe((data) => {
      // data.page = 5;
      this.get(data.page);
    })
   }

  ngOnInit(): void {
  }
  get(page: number) {
    this.resumeService.getResumes(page).subscribe((res: Paginate) => {
      this.paginate = res;
    });
  }
  showForm() {
    const dialogRef = this.dialog.open(FormComponent, {
      height: '400px',
      width: '600px',
      data: { obj: this.obj }

    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.get(this.paginate.current_page);
    });
  }
  deleteSkill() {
    this.resumeService.deleteResume(this.obj[0].id).subscribe((res) => {
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
  goPage(page: number) {
    this.router.navigate(['crm/resumes'], { queryParams: { page: page } });
  }

}
