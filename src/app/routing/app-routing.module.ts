import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { AboutComponent } from '../components/about/about.component';
import { ContactComponent } from '../components/contact/contact.component';
import { WorkComponent } from '../components/work/work.component';
import { LogregComponent } from '../components/log-reg/log-reg.component';

const routes: Routes = [
  { path: '', component: HomeComponent },  
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'work', component: WorkComponent },
  { path: 'logreg', component: LogregComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
