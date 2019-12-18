import { Component, OnInit } from '@angular/core';
import { HttpService } from "../http.service";
import { Observable } from 'rxjs';
import { ActivatedRoute, Params, Route, Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  

  private _httpService : HttpService;
  private _route : ActivatedRoute;
  private _router : Router;
  public pet : any = {};

  constructor(httpService: HttpService, route : ActivatedRoute, router : Router) {
    this._httpService = httpService;
    this._route = route;
    this._router = router;
   }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      console.log(params['_id']);
      const petObservable : Observable<any> = this._httpService.getOnePet(params['_id']);
      petObservable.subscribe( res => this.pet = res);
    });
    
  }

  delete(_id : string) : void {
    console.log
    const observable : Observable<any> = this._httpService.delete(_id);
    observable.subscribe(() => console.log("pet has been deleted"));
  }

}
