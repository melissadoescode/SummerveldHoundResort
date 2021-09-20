import { Component, OnInit } from '@angular/core';
import { Doggo } from 'src/app/Models/doggo';
import { DoggoProfileService } from 'src/app/Services/doggo-profile/doggo-profile.service';
import { ActivatedRoute, Router } from '@angular/router';
import { LifeEventService } from 'src/app/Services/life-event/life-event.service';
import { LifeEventViewModel } from 'src/app/Models/ViewModels/LifeEventViewModel';
import { ContentViewModel } from 'src/app/Models/ViewModels/ContentViewModel';
import { DoggoService } from 'src/app/Services/doggo/doggo.service';
import * as mdb from 'mdb-ui-kit'; 
import { Input } from 'mdb-ui-kit'; 

@Component({
  selector: 'app-doggo-profile',
  templateUrl: './doggo-profile.component.html',
  styleUrls: ['./doggo-profile.component.css']
})
export class DoggoProfileComponent implements OnInit {
  doggo: Doggo[];
  lifeEvent: LifeEventViewModel;
  content: ContentViewModel[] = [];
  count: any;
  layout: number;
  currentDateTime: any;
  statusCount = 0;
  doggos: Doggo[]=[];
  selectedDoggo: Doggo ={
    doggoId: 1, 
    doggoName: "",        
    doggoProfilePic: "",
    doggoDescription: "", 
    doggoNickname: "",    
    doggoDateCreated: new Date(Date.now())
  }
  constructor(private doggoProfileService: DoggoProfileService, private doggoService: DoggoService, private lifeEventService: LifeEventService,  private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.getDoggoById();
    this.getLifeEvent();
    this.getContentByAlbumId();
    this.contentGrid();
    console.log("test " + this.currentDateTime);
    // this.getDoggos();
  }

  getDoggoById(){
    const doggoId = this.route.snapshot.paramMap.get('doggoId');
    this.doggoProfileService.getDoggoById(doggoId).subscribe((data:any)=>{
      this.doggo = Array.of(data);
      console.log(this.doggo);
    });
  }

  getLifeEvent(){
    const doggoId = this.route.snapshot.paramMap.get('doggoId');
    this.lifeEventService.getLifeEventByDoggoId(+doggoId).subscribe((data:any)=>{
      this.lifeEvent = data;
    });
  }

  getContentByAlbumId(){
    const doggoId = this.route.snapshot.paramMap.get('doggoId');
    console.log('doggoId', +doggoId); 
    this.doggoProfileService.getContentByDoggoId(+doggoId).subscribe((data:any)=>{
      this.content = data;
      console.log('content',this.content);
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

  onSelectFurbookTimeline(doggo: Doggo): void {
    var routed = this.router.navigateByUrl('summerveldhoundresort/furbook-timeline/' + doggo.doggoId);
    // console.log(this.router.navigateByUrl('summerveldhoundresort/furbook-timeline/' + doggo.doggoId));
    // this.selectedDoggo = doggo;
    console.log(this.selectedDoggo);
  }
  // getDoggos(){
  //   this.doggoService.getDoggo().subscribe((data:any)=>{
  //     this.doggos = data;
  //   });
  // }

  // onSelect(doggo: Doggo): void {
  //   this.router.navigateByUrl('summerveldhoundresort/furbook-timeline/' + doggo.doggoId);
  //   // this.selectedDoggo = doggo;
  //   console.log(this.selectedDoggo);
  // }
}
