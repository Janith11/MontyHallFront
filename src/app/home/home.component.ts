import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { UserInfoService } from '../user-info.service';
import { ApiService } from '../api.service';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { NewUserComponent } from '../new-user/new-user.component';
import { Router } from '@angular/router';
import { NavBarComponent } from '../nav-bar/nav-bar.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @ViewChild('exampleModal') model! :ElementRef
  modelRef =NgbModalRef
  constructor(
    private user:UserInfoService,
    private api:ApiService,
    private modelService:NgbModal,
    private modalService: NgbModal,
    private router: Router,
    ) { }
  ngOnInit(): void {
    //this.modal = this.modalRef;
  }

  onPlay(){
    this.openModal()
  }

  openModal() {
    const modalRef = this.modalService.open(NewUserComponent);
    //modalRef.componentInstance.recipient = '';
    //modalRef.componentInstance.message = '';

    modalRef.result.then(
      (result) => {
        console.log('Modal closed with result:', result);
        this.user.userName=result
        this.router.navigate(['/simulation']);


      },
      (reason) => {
        console.log('Modal dismissed with reason:', reason);
      }
    );

  }


}
