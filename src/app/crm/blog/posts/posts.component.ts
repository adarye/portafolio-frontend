import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import {ActivationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { BlogService } from 'src/app/services/crm/blog.service';
import {MatDialog} from '@angular/material/dialog';
import { FormComponent } from './form/form.component';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  paginate: any = {};
  obj:any = [];
  currentPage:number;
  constructor(private readonly fb: FormBuilder, private blogService: BlogService, private router: Router, private dialog: MatDialog) {
    this.getQueries().subscribe((data) => {
      this.get(data.page);
      this.currentPage = data.page;
    })
  }

  ngOnInit(): void {
  }

  get(page: number) {
    this.blogService.getPosts(page).subscribe((res: any) => {
      this.paginate = res;
      console.log(res.data)
    })
  }
  destroy(){
    this.blogService.deletePost(this.obj[0].id).subscribe((res) => {

    })
  }
  openModal(){
    const dialogRef = this.dialog.open(FormComponent, {
      height: '400px',
      width: '600px',
      data: { obj: this.obj}

    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.get(this.currentPage);
    });
  }
  getQueries() {
    return this.router.events
      .pipe(filter((event) => event instanceof ActivationEnd))
      .pipe(filter((event: ActivationEnd) => event.snapshot.firstChild === null)).pipe
      (map((event: ActivationEnd) => event.snapshot.queryParams));
  }
  goPage(page: number) {
    this.router.navigate(['crm/blog/posts'], { queryParams: { page: page } });
  }

}
