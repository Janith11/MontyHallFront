import { Component, OnInit } from '@angular/core';
import { UserInfoService } from '../user-info.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private userInfoService:UserInfoService) { }

  public userName: string = '';
  ngOnInit(): void{
    const user = this.userInfoService.userName;
    if(user!== null){
      this.userName = user;
    }
  }


}
