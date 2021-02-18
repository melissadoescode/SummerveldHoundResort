import { Component, OnInit } from '@angular/core';
import { Doggo } from 'src/app/Models/doggo';
import { DoggoService } from 'src/app/Services/doggo/doggo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doggo',
  templateUrl: './doggo.component.html',
  styleUrls: ['./doggo.component.css']
})
export class DoggoComponent implements OnInit {

  doggos: Doggo[]=[];
  selectedDoggo: Doggo ={
    doggoId: 1, 
    doggoName: "",        
    doggoProfilePic: "",
    doggoDescription: "", 
    doggoNickname: "",    
    doggoDateCreated: new Date(Date.now())
  }

  constructor(private doggoService: DoggoService, private router: Router) { }

  ngOnInit(): void {
    this.getDoggos();
  }

  getDoggos(){
    this.doggoService.getDoggo().subscribe((data:any)=>{
      this.doggos = data;
    });
  }

  onSelect(doggo: Doggo): void {
    this.router.navigateByUrl('summerveldhoundresort/doggo-profile/' + doggo.doggoId);
    // this.selectedDoggo = doggo;
    console.log(this.selectedDoggo);
  }
}
