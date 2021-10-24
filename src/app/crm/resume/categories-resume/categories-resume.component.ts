import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ActivationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { ResumeCategory } from 'src/app/models/resume-category';
import { ResumeService } from 'src/app/services/crm/resume.service';

@Component({
  selector: 'app-categories-resume',
  templateUrl: './categories-resume.component.html',
  styleUrls: ['./categories-resume.component.css']
})
export class CategoriesResumeComponent implements OnInit {
  form: FormGroup;
  paginate: any = {};
  obj: ResumeCategory[] = [];
  constructor(private readonly fb: FormBuilder, private resumeService:ResumeService, private router:Router, private route: ActivatedRoute) {
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
    this.resumeService.getCategories(page).subscribe((res:any)=>{
      this.paginate = res;
      console.log(res.data);
    })
  }

  create(){
    this.form.markAllAsTouched();
    if(this.form.valid){
      this.resumeService.createCategory(this.form.value).subscribe((res:any)=>{
        this.paginate.data.push(res);
        this.form.reset();
    })
  }
}
edit(){

}
destroy(){

}
getQueries(){
  return this.router.events
  .pipe(filter((event) => event instanceof ActivationEnd))
  .pipe(filter((event: ActivationEnd) => event.snapshot.firstChild === null)).pipe
  (map((event: ActivationEnd) => event.snapshot.queryParams));
}

goPage(page:number){
     this.router.navigate(['crm/resume/categories'], {queryParams: { page: page} });
}


}
