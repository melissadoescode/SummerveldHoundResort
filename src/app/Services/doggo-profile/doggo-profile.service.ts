import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Doggo } from 'src/app/Models/doggo';
import { environment } from 'src/environments/environment';
import { ErrorHandlerService } from '../ErrorHandler/error-handler.service';

@Injectable({
  providedIn: 'root'
})
export class DoggoProfileService {

  doggo: Doggo[];
  rootUrl = environment.summerveldHoundResortApiUrl;
  paramDoggo = 'doggo/'

  constructor(private http: HttpClient, private errorHandler: ErrorHandlerService) { }

  getDoggoById(doggoId):Observable<Doggo>{
    return this.http.get<Doggo>(`${this.rootUrl}${this.paramDoggo}${doggoId}`)
    .pipe(
      map((data:any)=>{
        return data;
      }),
      catchError(this.errorHandler.handleCrudError)
    );
  }
}
