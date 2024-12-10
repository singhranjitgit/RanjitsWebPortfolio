import { Component } from '@angular/core';
import { Routes } from '../../routing/app-routes';
import { SkillsService } from 'src/app/services/skills.service';
import { RoutesConfig } from 'src/app/interfaces';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  routes: RoutesConfig= Routes
  skills: string[]

  constructor(private skillService: SkillsService){
    this.skills = this.skillService.getSkills()
  }
}
