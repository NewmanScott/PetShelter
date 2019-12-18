import { Component, OnInit } from '@angular/core';
import { HttpService } from "../http.service";
import { Observable } from 'rxjs';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { ParsedEventType } from '@angular/compiler';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  private _http : HttpService;
  public pets : Array<any> = [];

  constructor(http: HttpService) {
    this._http = http;
   }

  ngOnInit() : void {
    const petObservable : Observable<any> = this._http.getPets();
    petObservable.subscribe( res => {
      this.pets = res;
    });

  }

  

}
