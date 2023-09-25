import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodDetailComponent } from './food-detail.component';

describe('FoodDetailComponent', () => {
  let component: FoodDetailComponent;
  let fixture: ComponentFixture<FoodDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FoodDetailComponent]
    });
    fixture = TestBed.createComponent(FoodDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
