import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftSideInfoComponent } from './left-side-info.component';

describe('LeftSideInfoComponent', () => {
  let component: LeftSideInfoComponent;
  let fixture: ComponentFixture<LeftSideInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeftSideInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeftSideInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
