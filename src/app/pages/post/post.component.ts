import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { BlogCategory } from 'src/app/models/blog-category';
import { Paginate } from 'src/app/models/paginate';
import { Post } from 'src/app/models/post';
import { BlogService } from 'src/app/services/crm/blog.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
id:number;
obj:Post;
listCategories:BlogCategory[]= [];
urlFiles = environment.urlFiles;

  constructor(private blogservice:BlogService, private route: ActivatedRoute) {

   }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = +params.get('id');
      this.blogservice.showPost(this.id).subscribe(res=>{
        this.obj = res;
      })
      this.getCategories();
    });
  }
  getCategories(){
    this.blogservice.getCategories().subscribe(res=>{
      this.listCategories = res.data.slice(0,5);
    //  this.listCategories = res.data;
    })
  }

}
