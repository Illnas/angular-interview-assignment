import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightSideSpecialRemarksComponent } from './right-side-special-remarks.component';

describe('RightSideSpecialRemarksComponent', () => {
  let component: RightSideSpecialRemarksComponent;
  let fixture: ComponentFixture<RightSideSpecialRemarksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RightSideSpecialRemarksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RightSideSpecialRemarksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
