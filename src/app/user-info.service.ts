import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserInfoService {
  public userName:string = ''
  constructor() { }
}
