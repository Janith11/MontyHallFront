import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NavBarComponent } from './nav-bar/nav-bar.component';

@Injectable({
  providedIn: 'root'
})
export class UserInfoService {
  public userName:string = 'user'
  constructor(
    private toastr: ToastrService
    ) { }

  public tostOpt : Object ={
    timeOut:3000,
    positionClass:'toast-top-right',
    progressBar:false,
    progressAnimation:'decreasing'
  }

  showSuccess(msg:string) {
    this.toastr.success(msg,'',this.tostOpt);
  }
  showError(msg:string) {
    this.toastr.error(msg,'',this.tostOpt);
  }

  setUserName(){
    const storedUserName = localStorage.getItem('userName');
    if (storedUserName !== null) {
      this.userName = storedUserName;
    } else {
      this.userName = 'User';
    }
  }
}
