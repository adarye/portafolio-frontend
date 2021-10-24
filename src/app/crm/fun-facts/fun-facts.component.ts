import { filter, map } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivationEnd, Router } from '@angular/router';
import { FunFact } from 'src/app/models/fun-facts';
import { Paginate } from 'src/app/models/paginate';
import { FunFactsService } from 'src/app/services/crm/fun-facts.service';
import { SnackbarService } from 'src/app/services/crm/snackbar.service';
import { FormComponent } from '../fun-facts/form/form.component';

@Component({
  selector: 'app-fun-facts',
  templateUrl: './fun-facts.component.html',
  styleUrls: ['./fun-facts.component.css']
})
export class FunFactsComponent implements OnInit {
  paginate: Paginate = {};
  obj: FunFact[] = [];
  constructor(private funFactsService: FunFactsService, private dialog: MatDialog, private snackbarService: SnackbarService, private router: Router) {
    this.getQueries().subscribe((data) => {
      // data.page = 5;
      this.get(data.page);
    })
   }

  ngOnInit(): void {

  }
  get(page: number) {
    this.funFactsService.get(page).subscribe((res: Paginate) => {
      this.paginate = res;
    });
  }
  showForm() {
    const dialogRef = this.dialog.open(FormComponent, {
      height: '300px',
      width: '500px',
      data: { obj: this.obj }

    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.get(this.paginate.current_page);
    });
  }
  deleteSkill() {
    this.funFactsService.delete(this.obj[0].id).subscribe((res) => {
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
    this.router.navigate(['crm/fun-facts'], { queryParams: { page: page } });
  }

}
