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
   nextInfo?: Blog;
   nextId?: string;
   constructor(private routes: ActivatedRoute,
     private appService: AppService,
     private router: Router){
     this.routes.params.subscribe((res: any)=>{
        this.blogInfo = this.appService.getBlogs()[res.id]
        this.nextInfo = this.appService.getBlogs()[+(res.id)+1]
        this.nextId = `${+(res.id)+ 1}`
     })
   }

   handleBlogItemClick(){
      this.router.navigate(['blogs/blog/',this.nextId])
   }
}