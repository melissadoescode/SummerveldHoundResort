import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ErrorHandlerService } from '../ErrorHandler/error-handler.service';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DoggoService {

  rootUrl = environment.summerveldHoundResortApiUrl;
  paramDoggo = 'doggo'
  paramDoggoById = '/getDoggoById'
  doggoId = '?doggoId='
  doggoUpdateDeleteId = '?id='

  private httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' })};
  
  constructor(private http: HttpClient, private errorHandler: ErrorHandlerService) { }

  getDoggo(){
    return this.http.get(`${this.rootUrl}${this.paramDoggo}`)
    .pipe(catchError(this.errorHandler.handleError));
  }
}
