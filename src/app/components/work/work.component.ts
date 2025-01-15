import { Component } from "@angular/core";
import { WorkService } from "src/app/services/work.service";

@Component({
    selector: 'app-work',
    templateUrl: './work.component.html',
    styleUrls: ['./work.component.scss']
})
export class WorkComponent{
    workList: any[]= []
    constructor(private workService:WorkService){
        this.workList = this.workService.getProjects()
    }
}