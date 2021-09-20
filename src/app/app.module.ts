import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { LightboxModule } from 'ngx-lightbox';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { AboutComponent } from './Components/about/about.component';
import { DoggoComponent } from './Components/doggo/doggo.component';
import { BlogComponent } from './Components/blog/blog.component';
import { VolunteerComponent } from './Components/volunteer/volunteer.component';
import { VolunteerFormComponent } from './Components/volunteer-form/volunteer-form.component';
import { DoggoProfileModule } from './Components/doggo-profile/doggo-profile.module';
import { FurbookPhotosComponent } from './Components/furbook-photos/furbook-photos.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    DoggoComponent,
    BlogComponent,
    VolunteerComponent,
    VolunteerFormComponent,
    FurbookPhotosComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DoggoProfileModule, 
    CommonModule, 
    LightboxModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
