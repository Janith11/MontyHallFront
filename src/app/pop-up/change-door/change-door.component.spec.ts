import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeDoorComponent } from './change-door.component';

describe('ChangeDoorComponent', () => {
  let component: ChangeDoorComponent;
  let fixture: ComponentFixture<ChangeDoorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeDoorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangeDoorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
