import { Component, OnInit } from '@angular/core';
import { Doggo } from 'src/app/Models/doggo';
import { DoggoProfileService } from 'src/app/Services/doggo-profile/doggo-profile.service';
import { ActivatedRoute } from '@angular/router';
import { LifeEventService } from 'src/app/Services/life-event/life-event.service';
import { LifeEventViewModel } from 'src/app/Models/ViewModels/LifeEventViewModel';
import { ContentViewModel } from 'src/app/Models/ViewModels/ContentViewModel';
import { Content } from '@angular/compiler/src/render3/r3_ast';

@Component({
  selector: 'app-doggo-profile',
  templateUrl: './doggo-profile.component.html',
  styleUrls: ['./doggo-profile.component.css']
})
export class DoggoProfileComponent implements OnInit {
  doggo: Doggo[];
  lifeEvent: LifeEventViewModel[];
  content: ContentViewModel[] = [];
  count: any;
  layout: number;
  currentDateTime: any;
  
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
    const albumId = this.route.snapshot.paramMap.get('albumId');
    this.doggoService.getContentByAlbumId(+albumId).subscribe((data:any)=>{
      this.content = data;
      console.log(this.content);
      this.count = this.content.length;
      console.log("count " + this.count);
      this.layout = this.count;
    });
  }

  contentGrid(){
   this.currentDateTime = this.content.map(x=> x.albumDateCreated);
  }
}
