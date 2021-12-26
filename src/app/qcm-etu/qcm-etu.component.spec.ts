import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QcmEtuComponent } from './qcm-etu.component';

describe('QcmEtuComponent', () => {
  let component: QcmEtuComponent;
  let fixture: ComponentFixture<QcmEtuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QcmEtuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QcmEtuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
