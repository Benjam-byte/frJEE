import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QcmEnsComponent } from './qcm-ens.component';

describe('QcmEnsComponent', () => {
  let component: QcmEnsComponent;
  let fixture: ComponentFixture<QcmEnsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QcmEnsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QcmEnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
