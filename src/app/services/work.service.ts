import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WorkService {

  projects!: any[];

  constructor() {}

  getProjects(): any[]{
    return [
        {
            background: 'linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.5)),url("../../../assets/image/Screenshot 2025-01-09 181027.webp")',
            name: 'TvStartup',
            desc: 'TvStartup Inc. is a leading service provider in developing and deploying Internet Television media systems across all available platforms worldwide.',
            link: 'https://tvstartup.com/',
            btnTxt: 'Visit Project'
        },
        {
            background: 'linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.5)),url("../../../assets/image/lpl.webp")',
            name: 'letsplaylive',
            desc: 'Welcome to letsplaylive, the home of esports and gaming. Delivering the ultimate competitive gaming experience, from casual to pro.',
            link: 'https://gg.letsplay.live/home',
            btnTxt: 'Visit Project'
        },
        {
            background: 'linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.5)),url("../../../assets/image/googly.webp")',
            name: 'Googly',
            desc: 'Googly, a part of Dynasty Gaming & Media, is a competitive gaming platform designed for India’s 500 million+ gamers.',
            link: 'https://platform.googly.gg/home',
            btnTxt: 'Visit Project'
        },
        {
            background: 'linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.5)),url("../../../assets/image/lightningdragon.webp")',
            name: 'Lightning Dragon',
            desc: 'Welcome to Lightning Dragon, the home of esports and gaming for Philippines. Delivering the ultimate competitive gaming experience, from casual to pro.',
            link: 'https://lightningdragon.gg/',
            btnTxt: 'Visit Project'
        }
    ];
  }
}
