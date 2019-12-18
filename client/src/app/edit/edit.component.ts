import { Component, OnInit } from '@angular/core';
import { HttpService } from "../http.service";
import { HttpClient } from 'selenium-webdriver/http';
import { Observable } from 'rxjs';
import { ActivatedRoute, Params, Route, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  private _httpService : HttpService;
  private _route : ActivatedRoute;
  private _router : Router;
  public pet : any = {};
  public errors: any = {};

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

  updatePet2(_id) {
    console.log("In the edit.component.ts. Here's the id: " + _id)
    const observable : Observable<any> = this._httpService.updatePet(_id, this.pet);
    observable.subscribe( res => {
      console.log(res);
      if(res['errors']) {
        this.errors = res['errors'];
      } else {
        this._router.navigate(['/']);
      }
    });
  }

}
