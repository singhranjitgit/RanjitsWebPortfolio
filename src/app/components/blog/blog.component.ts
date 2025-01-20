import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Blog } from "src/app/interfaces";
import { AppService } from "src/app/services/app.service";

@Component({
    selector: 'app-blog',
    templateUrl: './blog.component.html',
    styleUrls : ['./blog.component.scss'],
})

export class BlogComponent{
   blogInfo?: Blog;
   constructor(private routes: ActivatedRoute,
     private appService: AppService){
     this.routes.params.subscribe((res: any)=>{
        this.blogInfo = this.appService.getBlogs()[res.id]
     })
   }
}