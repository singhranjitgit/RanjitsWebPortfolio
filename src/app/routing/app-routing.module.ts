import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { ContactComponent } from '../components/contact/contact.component';
import { WorkComponent } from '../components/work/work.component';
import { LogregComponent } from '../components/log-reg/log-reg.component';
import { BlogsComponent } from '../components/blogs/blogs.component';
import { BlogComponent } from '../components/blog/blog.component';
import { FaqComponent } from '../components/faqs/faq.component';
import { ServicesComponent } from '../components/services/services.component';

const routes: Routes = [
  { path: '', component: HomeComponent },  
  { path: 'contact', component: ContactComponent },
  { path: 'work', component: WorkComponent },
  { path: 'logreg', component: LogregComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'blogs', 
    children: [
      {path: '', component: BlogsComponent},
      {path: 'blog/:id', component: BlogComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
