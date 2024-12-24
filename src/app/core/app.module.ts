import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms'; // Import this

import { AppComponent } from './app.component';
import { ContactComponent } from '../components/contact/contact.component';
import { HomeComponent } from '../components/home/home.component';
import { AboutComponent } from '../components/about/about.component';
import { AppRoutingModule } from '../routing/app-routing.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';  
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';  
import { TranslateHttpLoader } from '@ngx-translate/http-loader';  
import { MatDialogModule } from '@angular/material/dialog';
import { ConfirmPopupComponent } from '../shared/confirm-popup/confirm-popup.component';
import { WorkComponent } from '../components/work/work.component';
import { LogregComponent } from '../components/log-reg/log-reg.component';
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ConfirmPopupComponent,
    WorkComponent,
    LogregComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatDialogModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
    }),
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
