import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ActivationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { BlogService } from 'src/app/services/crm/blog.service';
import { BlogCategory } from '../../../models/blog-category';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  dataLoaded: Promise<boolean> =  Promise.resolve(false);
  form: FormGroup;
  paginate: any = {};

  constructor(private readonly fb: FormBuilder, private blogService:BlogService, private router:Router, private route: ActivatedRoute) {

    this.getQueries().subscribe((data) => {
      // data.page = 5;
      this.get(data.page);
     })
    this.form = this.fb.group({
      name: ['',[Validators.required,Validators.minLength(3), Validators.maxLength(80)]],
      description: ['',[Validators.required, Validators.minLength(3), Validators.maxLength(80)]],
      color: ['',[Validators.required, Validators.minLength(1), Validators.maxLength(30)]]
    });
  }

  ngOnInit(): void {

  }
  get(page:number){
    this.blogService.getCategories(page).subscribe((res:any)=>{
      this.paginate = res;
      this.dataLoaded = Promise.resolve(true);
    })
  }

  create(){
    this.form.markAllAsTouched();
    if(this.form.valid){
      this.blogService.createCategory(this.form.value).subscribe((res:BlogCategory)=>{
        this.paginate.data.push(res);
        this.form.reset();
    })
  }
}
getQueries(){
  return this.router.events
  .pipe(filter((event) => event instanceof ActivationEnd))
  .pipe(filter((event: ActivationEnd) => event.snapshot.firstChild === null)).pipe
  (map((event: ActivationEnd) => event.snapshot.queryParams));
}

goPage(page:number){
     this.router.navigate(['crm/blog/categories'], {queryParams: { page: page} });
}


}
