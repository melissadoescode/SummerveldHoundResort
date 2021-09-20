import { NgModule } from '@angular/core';
import { DoggoProfileRoutingModule } from './doggo-profile-routing.module';
import { DoggoProfileComponent } from './doggo-profile.component';
import { CommonModule } from '@angular/common';
import { FurbookTimelineComponent } from './furbook-timeline/furbook-timeline.component'; 
import { FurbookAboutComponent } from './furbook-about/furbook-about.component'; 

@NgModule({
    imports: [
        DoggoProfileRoutingModule,
        CommonModule
    ],
    exports: [DoggoProfileComponent],
    declarations: [DoggoProfileComponent, FurbookTimelineComponent, FurbookAboutComponent]
})
export class DoggoProfileModule { }
