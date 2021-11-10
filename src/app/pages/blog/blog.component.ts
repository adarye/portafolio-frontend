import { Component, OnInit } from '@angular/core';
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
  constructor(private blogService:BlogService) {
    this.blogService.getPosts(1).subscribe(res => {
      this.listPosts = res.data;
    }
    );
   }

  ngOnInit(): void {
  }

}
