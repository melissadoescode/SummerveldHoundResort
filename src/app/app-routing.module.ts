import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './Components/about/about.component';
import { BlogComponent } from './Components/blog/blog.component';
import { DoggoProfileComponent } from './Components/doggo-profile/doggo-profile.component';
import { DoggoComponent } from './Components/doggo/doggo.component';


const routes: Routes = [
  {path:'', component:AboutComponent},
  {path:'summerveldhoundresort/about', component:AboutComponent},
  {path:'summerveldhoundresort/doggo', component:DoggoComponent},
  {path:'summerveldhoundresort/doggo-profile/:doggoId', component:DoggoProfileComponent},
  {path:'summerveldhoundresort/blog', component:BlogComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
