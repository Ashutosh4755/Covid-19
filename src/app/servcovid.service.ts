import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServcovidService {

  url="https://corona.lmao.ninja/v2/countries";
  constructor(private http:HttpClient) { }
 

  public reportsofcovid(){
    return this.http.get(this.url);
  }

  




}

