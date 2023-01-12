import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftSideImageComponent } from './left-side-image.component';

describe('LeftSideImageComponent', () => {
  let component: LeftSideImageComponent;
  let fixture: ComponentFixture<LeftSideImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeftSideImageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeftSideImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
