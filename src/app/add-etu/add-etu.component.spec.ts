import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEtuComponent } from './add-etu.component';

describe('AddEtuComponent', () => {
  let component: AddEtuComponent;
  let fixture: ComponentFixture<AddEtuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEtuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEtuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
