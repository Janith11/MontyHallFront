import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders, HttpParams} from '@angular/common/http'
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators'
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private endPoint: string = 'https://localhost:7241/api/Simulation/'
  constructor(
    private http:HttpClient
  ) { }

  private extractData(res:Response){
    let body =res;
    return body || {};
  }

  //get user data
  getRandomCarBox():Observable<any>{
    return this.http.get(this.endPoint+'carDoor')
  }

  //run simulate
  getTheSimulationResult(noOfGames:number,doorChanged:boolean):Observable<any>{
    const params= new HttpParams().set('numberOfSimulations',noOfGames).set('changeDoor',doorChanged)
    return this.http.get<any>(this.endPoint, {params:params});
    //return this.http.get<any>(this.endPoint+'?numberOfSimulations='+noOfGames+'changeDoor='+doorChanged);

  }
}
