import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Food } from 'src/app/_models/cooking/food';
import { FoodService } from 'src/app/_services';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
/** A component to view and modify the list of basic foods that can be used in recipes */
export class FoodListComponent {
  /** The foods to list */
  public foods: Observable<Food[]>;

  /**
   * Construct a new `FoodListComponent`
   * @param foodService - The API service for CRUD operations on foods
   */
  public constructor(private foodService: FoodService) {
    this.foods = this.foodService.getAll();
  }

  /** TODO: delete */
  getDisplayString(food: Food): string {
    return JSON.stringify(food);
  }
}
