import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DoggoProfileComponent } from './doggo-profile.component';
import { FurbookTimelineComponent } from './furbook-timeline/furbook-timeline.component';
import { FurbookAboutComponent } from './furbook-about/furbook-about.component';

const routes: Routes = [
    { path: 'summerveldhoundresort/doggo-profile/:doggoId', component: DoggoProfileComponent },
    { path: 'summerveldhoundresort/doggo-profile/:doggoId/furbook-timeline', component: FurbookTimelineComponent }, 
    { path: 'summerveldhoundresort/doggo-profile/:doggoId/furbook-about', component: FurbookAboutComponent }, 
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DoggoProfileRoutingModule { }
