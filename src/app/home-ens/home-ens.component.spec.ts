import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeEnsComponent } from './home-ens.component';

describe('HomeEnsComponent', () => {
  let component: HomeEnsComponent;
  let fixture: ComponentFixture<HomeEnsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeEnsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeEnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
