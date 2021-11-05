import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post';
import { BlogService } from 'src/app/services/crm/blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

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
