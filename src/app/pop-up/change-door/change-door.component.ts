import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-change-door',
  templateUrl: './change-door.component.html',
  styleUrls: ['./change-door.component.css']
})
export class ChangeDoorComponent implements OnInit {

 selectedDoorNo: any;
  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
    console.log(JSON.stringify(this.selectedDoorNo))
  }
  onNo() {
    this.activeModal.dismiss('Selected No');
  }

  onYes() {
    this.activeModal.close(true);
  }

}
