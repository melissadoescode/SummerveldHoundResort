import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { LifeEventViewModel } from 'src/app/Models/ViewModels/LifeEventViewModel';
import { environment } from 'src/environments/environment';
import { ErrorHandlerService } from '../ErrorHandler/error-handler.service';

@Injectable({
  providedIn: 'root'
})
export class LifeEventService {

  rootUrl = environment.summerveldHoundResortApiUrl;
  paramLifeEvent = 'LifeEvent/'
  paramGetDogggoById = 'getDoggoById?'
  paramDoggoId = 'doggoId='
  
  constructor(private http: HttpClient, private errorHandler: ErrorHandlerService) { }

  getLifeEventByDoggoId(doggoId: number):Observable<LifeEventViewModel[]>{
    return this.http.get<LifeEventViewModel[]>(`${this.rootUrl}${this.paramLifeEvent}${this.paramGetDogggoById}${this.paramDoggoId}${doggoId}`)
    .pipe(catchError(this.errorHandler.handleError));
  }
}
