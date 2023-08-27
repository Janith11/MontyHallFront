import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ChangeDoorComponent } from '../pop-up/change-door/change-door.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserInfoService } from '../user-info.service';

@Component({
  selector: 'app-simulation',
  templateUrl: './simulation.component.html',
  styleUrls: ['./simulation.component.css']
})
export class SimulationComponent implements OnInit {
  public simulationForm!:FormGroup;
  public winDoorNo:number= 0
  public selectedDoorNo:number= 0
  public addClassDoorNo:number=0
  public addClassWinDoorNo:number=0
  public switchedDoorNo:number=0
  public otherDoorNo:number = 0
  public missingDoorNo:number=0
  public selectedDoorOne:boolean = false
  public selectedDoorTwo:boolean = false
  public selectedDoorThree:boolean = false
  public result:boolean =false
  public simulateWins:number =0
  public simulateLooses:number =0
  public simulateResuls:any;
  public disableButtons:boolean =false
  public youWon:boolean=false
  public youLoose:boolean=false
  imageUrl: string = '../../assets/Images/ClosedDoor.jpg';
  DoorOneimageUrl : string = '../../assets/Images/ClosedDoor.jpg';
  DoorTwoimageUrl: string = '../../assets/Images/ClosedDoor.jpg';
  DoorThreeimageUrl: string = '../../assets/Images/ClosedDoor.jpg';
  ClosedDoor: string = '../../assets/Images/ClosedDoor.jpg';
  OpenedDoor: string = '../../assets/Images/OpenedDoor.jpg';
  DoorWithCar: string = '../../assets/Images/DoorWithCar.jpg';
  DoorWIthGoat: string = '../../assets/Images/DoorWithGoat.jpg';
  constructor(
    private apiService:ApiService,
    private modalService: NgbModal,
    private formBuilder:FormBuilder,
    private userInfo:UserInfoService
    ) { }

  ngOnInit(): void {
    this.simulationForm = this.formBuilder.group({
      noOfGames: ['', [Validators.required, Validators.min(1), Validators.max(100)]],
      doorChange: ['false', Validators.required],
    });
    this.getRandomCarBox()

  }

  getRandomCarBox(){
    this.apiService.getRandomCarBox().subscribe(data=>{
      this.winDoorNo = data
      console.log('car door '+this.winDoorNo)
    })
  }

  selectedDoor(selectedDoorNo:number){
    this.selectedDoorNo =selectedDoorNo
    this.addClassDoorNo=this.selectedDoorNo
    console.log(selectedDoorNo)
    this.selectOtherDooerNo()
    if(this.otherDoorNo == 1){
      //this.selectedDoorOne =true
      this.DoorOneimageUrl = this.DoorWIthGoat
    }else if(this.otherDoorNo == 2){
      //this.selectedDoorTwo =true
      this.DoorTwoimageUrl  = this.DoorWIthGoat
    }else{
      //this.selectedDoorThree =true
      this.DoorThreeimageUrl  = this.DoorWIthGoat
    }
    this.openOptionToChangeDoor(selectedDoorNo)
    this.disableButtons = true
  }

  openOptionToChangeDoor(selectedDoorNo:any){

      const modalRef = this.modalService.open(ChangeDoorComponent);
      modalRef.componentInstance.selectedDoorNo = selectedDoorNo;

      modalRef.result.then(
        (result) => {

          this.switchNumbers()
          this.addClassDoorNo= this.switchedDoorNo
          if(this.switchedDoorNo == this.winDoorNo){
            //this.youWon= true
            this.userInfo.showSuccess('Congratulation! You won the car');
            if(this.switchedDoorNo == 1){
              this.DoorOneimageUrl = this.DoorWithCar
            }else if(this.switchedDoorNo == 2){
              this.DoorTwoimageUrl  = this.DoorWithCar
            }else if(this.switchedDoorNo == 3){
              this.DoorThreeimageUrl  = this.DoorWithCar
            }
            if(this.selectedDoorNo == 1){
              this.DoorOneimageUrl = this.DoorWIthGoat
            }else if(this.selectedDoorNo == 2){
              this.DoorTwoimageUrl  = this.DoorWIthGoat
            }else if(this.selectedDoorNo == 3){
              this.DoorThreeimageUrl  = this.DoorWIthGoat
            }
          }
          else{
            //this.youLoose= true
            this.userInfo.showError('You loose the car, Plase try again!')
            if(this.switchedDoorNo == 1){
              this.DoorOneimageUrl = this.DoorWIthGoat
            }else if(this.switchedDoorNo == 2){
              this.DoorTwoimageUrl  = this.DoorWIthGoat
            }else if(this.switchedDoorNo == 3){
              this.DoorThreeimageUrl  = this.DoorWIthGoat
            }
            if(this.winDoorNo == 1){
              this.DoorOneimageUrl = this.DoorWithCar
            }else if(this.winDoorNo == 2){
              this.DoorTwoimageUrl  = this.DoorWithCar
            }else if(this.winDoorNo == 3){
              this.DoorThreeimageUrl  = this.DoorWithCar
            }
          }
          console.log('Modal closed with result:', result);

        },
        (reason) => {
          console.log('Modal dismissed with reason:', reason);
          this.missingDoor()
          console.log(this.selectedDoorNo+' '+this.winDoorNo+ ' '+this.otherDoorNo)
          if(this.selectedDoorNo == this.winDoorNo){
            //this.youWon= true
            this.userInfo.showSuccess('Congratulation! You won the car');
            if(this.selectedDoorNo == 1){
              this.DoorOneimageUrl = this.DoorWithCar
            }else if(this.selectedDoorNo == 2){
              this.DoorTwoimageUrl  = this.DoorWithCar
            }else if(this.selectedDoorNo == 3){
              this.DoorThreeimageUrl  = this.DoorWithCar
            }
            if(this.missingDoorNo == 1){
              this.DoorOneimageUrl = this.DoorWIthGoat
            }else if(this.missingDoorNo == 2){
              this.DoorTwoimageUrl  = this.DoorWIthGoat
            }else if(this.missingDoorNo == 3){
              this.DoorThreeimageUrl  = this.DoorWIthGoat
            }
          }
          else{
            //this.youLoose= true
            this.userInfo.showError('You loose the car, Plase try again!')
            if(this.selectedDoorNo == 1){
              this.DoorOneimageUrl = this.DoorWIthGoat
            }else if(this.selectedDoorNo == 2){
              this.DoorTwoimageUrl  = this.DoorWIthGoat
            }else if(this.selectedDoorNo == 3){
              this.DoorThreeimageUrl  = this.DoorWIthGoat
            }
            if(this.missingDoorNo == 1){
              this.DoorOneimageUrl = this.DoorWithCar
            }else if(this.missingDoorNo == 2){
              this.DoorTwoimageUrl  = this.DoorWithCar
            }else if(this.missingDoorNo == 3){
              this.DoorThreeimageUrl  = this.DoorWithCar
            }
          }

        }
      );
  }

  selectOtherDooerNo(){
    for (let num = 1; num <= 3; num++) {
      if (num !== this.winDoorNo && num !== this.selectedDoorNo) {
        this.otherDoorNo = num;
        break;
      }
    }
  }

  switchNumbers(){
    for (let num = 1; num <= 3; num++) {
      if (num !== this.otherDoorNo && num !== this.selectedDoorNo) {
        this.switchedDoorNo = num;
        break;
      }
    }
  }

  missingDoor(){
    for (let num = 1; num <= 3; num++) {
      if (num !== this.otherDoorNo && num !== this.selectedDoorNo) {
        this.missingDoorNo = num;
        break;
      }
    }
  }

  reset(){

    this.selectedDoorNo= 0
    this.selectedDoorOne= false
    this.selectedDoorTwo= false
    this.selectedDoorThree= false
    this.DoorOneimageUrl=this.imageUrl
    this.DoorTwoimageUrl=this.imageUrl
    this.DoorThreeimageUrl=this.imageUrl
    this.disableButtons=false
    this.youWon= false
    this.youLoose= false
    this.addClassDoorNo=0
    this.addClassWinDoorNo=0
    this.getRandomCarBox()
  }

  stringToBoolean(value: string): boolean {
    return JSON.parse(value.toLowerCase());
  }

  submit(){

    this.result = false;
    console.log(this.simulationForm.value)
    var IsDoorChanges = this.stringToBoolean(this.simulationForm.value.doorChange)
    var noOfGames =this.simulationForm.value.noOfGames

    console.log('IsDoorChanges'+IsDoorChanges)
    console.log('noOfGames'+noOfGames)
    //console.log()
    this.apiService.getTheSimulationResult(noOfGames,IsDoorChanges).subscribe((data:[])=>{
      console.log(data)
      this.result = true;
      this.simulateResuls =data;
      this.simulateWins=this.simulateResuls.wins
      this.simulateLooses=this.simulateResuls.losses
      //this.simulateWins = data.wins;
    })
  }
}
