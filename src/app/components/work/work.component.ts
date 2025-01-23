import { Component } from "@angular/core";
import { workBlog } from "src/app/interfaces";
import { WorkService } from "src/app/services/work.service";

@Component({
    selector: 'app-work',
    templateUrl: './work.component.html',
    styleUrls: ['./work.component.scss']
})
export class WorkComponent{
    workList: workBlog[]= []
    constructor(private workService:WorkService){
        this.workList = this.workService.getProjects()
    }

    handleWorkBlockClick(item: any){
        window.open(item.link, '_blank')
    }
}