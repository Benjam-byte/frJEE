import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeEtuComponent } from './home-etu.component';

describe('HomeEtuComponent', () => {
  let component: HomeEtuComponent;
  let fixture: ComponentFixture<HomeEtuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeEtuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeEtuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
