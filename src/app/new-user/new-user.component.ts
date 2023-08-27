import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { UserInfoService } from '../user-info.service';
import { NavBarComponent } from '../nav-bar/nav-bar.component';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {
  
  constructor
    (
    public activeModal: NgbActiveModal,
    private userInfo:UserInfoService
    ) { }
  userName = ''
  ngOnInit(): void {
    this.getUserName()
  }

  onCancel() {
    this.activeModal.dismiss('Cancel clicked');
  }

  onSave() {
    this.userInfo.userName = this.userName
    console.log(this.userInfo.userName)
    //this.userInfo.userName =this.userName
    this.activeModal.close(this.userName);
  }

  getUserName(){
    const storedUserName = this.userInfo.userName;
    if (storedUserName !== null) {
      this.userName = storedUserName;
    } else {
      this.userName = 'User';
    }
  }
}
