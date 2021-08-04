import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { AboutComponent } from './Components/about/about.component';
import { DoggoComponent } from './Components/doggo/doggo.component';
import { DoggoProfileComponent } from './Components/doggo-profile/doggo-profile.component';
import { BlogComponent } from './Components/blog/blog.component';
import { VolunteerComponent } from './Components/volunteer/volunteer.component';
import { VolunteerFormComponent } from './Components/volunteer-form/volunteer-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    DoggoComponent,
    DoggoProfileComponent,
    BlogComponent,
    VolunteerComponent,
    VolunteerFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
