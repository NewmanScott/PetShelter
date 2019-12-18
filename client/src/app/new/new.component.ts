import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { HttpClient } from 'selenium-webdriver/http';
import { Observable} from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  private _router : Router;
  private _http : HttpService;
  public pet : any = {}
  public errors : any = {};

  constructor(http: HttpService, router : Router) { 
    this._router = router;
    this._http = http;
  }

  ngOnInit() {
  }

  createPet() {
    const petObservable : Observable<any> = this._http.createPet1(this.pet);
    petObservable.subscribe ( res => {
      if (res.errors) {
        this.errors = res.errors;
      }
      else {
        this._router.navigate(['/pets']);
      }
    });
  }

}
