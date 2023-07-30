import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { UserInfoService } from '../user-info.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal, private userInfo:UserInfoService) { }
  userName ='kamal'
  ngOnInit(): void {
  }
  // onCancel(){

  // }
  // onSave(){

  // }


  onCancel() {
    this.activeModal.dismiss('Cancel clicked');
  }

  onSave() {
    this.userInfo.userName = 'username'

    localStorage.setItem('userName',this.userName)
    this.activeModal.close(this.userName);
  }
}
