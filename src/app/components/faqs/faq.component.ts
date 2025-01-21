import { Component } from "@angular/core";
import { Faq } from "src/app/interfaces";
import { FaqService } from "src/app/services/faq.service";

@Component({
    selector: 'app-faq',
    templateUrl: './faq.component.html',
    styleUrls: ['./faq.component.scss']
})
export class FaqComponent{
    faqItems: Faq[]=[]
    constructor(private faqService: FaqService){
        this.faqItems = this.faqService.getFaqs()
    }

    toggleAnswer(index: number){
        this.faqItems[index].isActive = !this.faqItems[index].isActive;
    }
}