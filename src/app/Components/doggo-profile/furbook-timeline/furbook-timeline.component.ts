import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Doggo } from 'src/app/Models/doggo';
import { ContentViewModel } from 'src/app/Models/ViewModels/ContentViewModel';
import { LifeEventViewModel } from 'src/app/Models/ViewModels/LifeEventViewModel';
import { DoggoProfileService } from 'src/app/Services/doggo-profile/doggo-profile.service';
import { LifeEventService } from 'src/app/Services/life-event/life-event.service';

@Component(  {
  selector: 'app-furbook-timeline',
  templateUrl: './furbook-timeline.component.html',
  styleUrls: ['./furbook-timeline.component.css']
})
export class FurbookTimelineComponent implements OnInit {

  doggo: Doggo[];
  lifeEvent: LifeEventViewModel[];
  content: ContentViewModel[] = [];
  count: any;
  layout: number;
  currentDateTime: any;
  statusCount = 0;
  
  constructor(private doggoService: DoggoProfileService, private lifeEventService: LifeEventService,  private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getDoggoById();
    this.getLifeEvent();
    this.getContentByAlbumId();
    this.contentGrid();
    console.log("test " + this.currentDateTime);
  }

  getDoggoById(){
    const doggoId = this.route.snapshot.paramMap.get('doggoId');
    this.doggoService.getDoggoById(doggoId).subscribe((data:any)=>{
      this.doggo = Array.of(data);
    });
  }

  getLifeEvent(){
    const doggoId = this.route.snapshot.paramMap.get('doggoId');
    this.lifeEventService.getLifeEventByDoggoId(+doggoId).subscribe((data:any)=>{
      this.lifeEvent = Array.of(data);
    });
  }

  getContentByAlbumId(){
    const doggoId = this.route.snapshot.paramMap.get('doggoId');
    this.doggoService.getContentByDoggoId(+doggoId).subscribe((data:any)=>{
      this.content = data;
      console.log(this.content);
      this.count = this.content.length;
      console.log("count " + this.count);
      this.layout = this.count;
      if(this.count > 0){
        this.content[0].isFirstItem = true;
      }
    });
  }

  contentGrid(){
   this.currentDateTime = this.content.map(x=> x.albumDateCreated);
  }


}
