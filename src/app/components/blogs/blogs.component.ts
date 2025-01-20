import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { AppService } from "src/app/services/app.service";

@Component({
    selector: 'app-blogs',
    templateUrl: './blogs.component.html',
    styleUrls: ['./blogs.component.scss']
})

export class BlogsComponent{
    blogList: any[]=[]
    constructor(private router: Router, private appService: AppService){}
    ngOnInit(){
        this.blogList = this.appService.getBlogs()
    }
    handleBlogNav(index: any){
        this.router.navigate(['blogs/blog/',index])
    }
}