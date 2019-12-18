import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private _httpClient : HttpClient;

  constructor(httpClient : HttpClient) {
    this._httpClient = httpClient;
  }

  getPets() : Observable<any> {
    return this._httpClient.get("/api/pets");
  }

  createPet1(pet : any) : Observable<any> {
    return this._httpClient.post("/api/pets", pet);
  }

  delete(_id : string) : Observable<any> {
    console.log("made it to the other delete");
    return this._httpClient.delete("/api/pets/" + (_id));
  }

  getOnePet(_id : string) : Observable<any> {
    return this._httpClient.get('/api/pets/' + (_id));
  }

  updatePet(_id : string, petData : any) : Observable<any> {
    console.log("in the httpservice. Here's the id: " + _id); 
    return this._httpClient.put('/api/pets/'+ _id, petData);
  }
}
