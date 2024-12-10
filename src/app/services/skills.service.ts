import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  skills!: string[];

  constructor() {}

  getSkills(): string[]{
    return ['JavaScript', 'TypeScript', 'Angular', 'Node.js', 'HTML', 'CSS', 'Git', 'Mongodb', 'Express js'];
  }
}
