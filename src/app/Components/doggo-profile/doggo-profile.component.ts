import { Component, OnInit } from '@angular/core';
import { Doggo } from 'src/app/Models/doggo';
import { DoggoProfileService } from 'src/app/Services/doggo-profile/doggo-profile.service';
import { ActivatedRoute } from '@angular/router';
import { LifeEventService } from 'src/app/Services/life-event/life-event.service';
import { LifeEventViewModel } from 'src/app/Models/ViewModels/LifeEventViewModel';

@Component({
  selector: 'app-doggo-profile',
  templateUrl: './doggo-profile.component.html',
  styleUrls: ['./doggo-profile.component.css']
})
export class DoggoProfileComponent implements OnInit {
  doggo: Doggo;
  lifeEvent: LifeEventViewModel;
  
  constructor(private doggoService: DoggoProfileService, private lifeEventService : LifeEventService,  private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getDoggoById();
    this.getLifeEvent();
  }

  getDoggoById(){
    const doggoId = this.route.snapshot.paramMap.get('doggoId');
    this.doggoService.getDoggoById(doggoId).subscribe(info => {
      this.doggo = info;
    })
  }

  getLifeEvent(){
    const doggoId = this.route.snapshot.paramMap.get('doggoId');
    this.lifeEventService.getLifeEventByDoggoId(+doggoId).subscribe((data:any)=>{
      this.lifeEvent = data;
    });
  }
}
