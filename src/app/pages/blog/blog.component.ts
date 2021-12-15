import { Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/models/post';
import { BlogService } from 'src/app/services/crm/blog.service';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})

export class BlogComponent implements OnInit {
  urlFiles = environment.urlFiles;
  listPosts:Post[] = [];
  idCategory:number;
  constructor(private blogService:BlogService, private route: ActivatedRoute, private titleService: Title) {
    this.titleService.setTitle('Blog');
   }

  ngOnInit(): void {
    this.route.queryParams
    .subscribe(params => {
      this.idCategory = params.idCategory; // { orderby: "price" }
      this.getPosts(params.idCategory);
    }
  );
  }

  getPosts(idCategory:number){
    this.blogService.getPosts(1,idCategory).subscribe(res => {
      this.listPosts = res.data;
    }
    );
  }

}
