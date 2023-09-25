import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Food } from 'src/app/_models/cooking/food';
import { Nutrition } from 'src/app/_models/cooking/nutrition';
import { FoodService } from 'src/app/_services';

@Component({
  selector: 'app-food-detail',
  templateUrl: './food-detail.component.html',
  styleUrls: ['./food-detail.component.css']
})
/** TODO */
export class FoodDetailComponent implements OnInit {
  /** TODO */
  public food: Food = new Food();

  public foodForm = this.formBuilder.group({
    name: this.formBuilder.control(''),
    nutrition: this.formBuilder.group({
      calories: this.formBuilder.control<number | null>(null),
      saturatedFat: this.formBuilder.control<number | null>(null),
      transFat: this.formBuilder.control<number | null>(null),
      cholesterol: this.formBuilder.control<number | null>(null),
      sodium: this.formBuilder.control<number | null>(null),
      carbohydrates: this.formBuilder.control<number | null>(null),
      fiber: this.formBuilder.control<number | null>(null),
      sugar: this.formBuilder.control<number | null>(null),
      protein: this.formBuilder.control<number | null>(null)
    })
  });

  /** TODO */
  public constructor(private foodService: FoodService,
                     private route: ActivatedRoute,
                     private formBuilder: FormBuilder) { }

  /** Initialize the component */
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    // TODO: should reject routes with an unknown ID
    if (id != null && id != 'new') {
      this.foodService.getSingle(id).subscribe((food) => {
        this.food = food;
        this.initializeForm(this.food);
      });
    }
  }

  /** TODO */
  private initializeForm(food: Food) {
    this.foodForm.controls.name.setValue(food.name);
    this.foodForm.controls.nutrition.controls.calories.setValue(food.nutrition?.calories ?? null);
    this.foodForm.controls.nutrition.controls.saturatedFat.setValue(food.nutrition?.saturatedFat ?? null);
    this.foodForm.controls.nutrition.controls.transFat.setValue(food.nutrition?.transFat ?? null);
    this.foodForm.controls.nutrition.controls.cholesterol.setValue(food.nutrition?.cholesterol ?? null);
    this.foodForm.controls.nutrition.controls.sodium.setValue(food.nutrition?.sodium ?? null);
    this.foodForm.controls.nutrition.controls.carbohydrates.setValue(food.nutrition?.carbohydrates ?? null);
    this.foodForm.controls.nutrition.controls.fiber.setValue(food.nutrition?.fiber ?? null);
    this.foodForm.controls.nutrition.controls.sugar.setValue(food.nutrition?.sugar ?? null);
    this.foodForm.controls.nutrition.controls.protein.setValue(food.nutrition?.protein ?? null);
  }

  /** TODO */
  public save() {
    this.food.name = this.foodForm.controls.name.value ?? 'New Food';
    this.food.nutrition = new Nutrition();
    this.food.nutrition.calories = this.foodForm.controls.nutrition.controls.calories.value;
    this.food.nutrition.saturatedFat = this.foodForm.controls.nutrition.controls.saturatedFat.value;
    this.food.nutrition.transFat = this.foodForm.controls.nutrition.controls.transFat.value;
    this.food.nutrition.cholesterol = this.foodForm.controls.nutrition.controls.cholesterol.value;
    this.food.nutrition.sodium = this.foodForm.controls.nutrition.controls.sodium.value;
    this.food.nutrition.carbohydrates = this.foodForm.controls.nutrition.controls.carbohydrates.value;
    this.food.nutrition.fiber = this.foodForm.controls.nutrition.controls.fiber.value;
    this.food.nutrition.sugar = this.foodForm.controls.nutrition.controls.sugar.value;
    this.food.nutrition.protein = this.foodForm.controls.nutrition.controls.protein.value;

    if (this.food.id) {
      this.foodService.edit(this.food).subscribe();
    } else {
      this.foodService.add(this.food).subscribe();
    }
  }

  /** TODO */
  public revertChanges() {
    this.initializeForm(this.food);
  }

  /** TODO */
  public deleteFood() {
    if (this.food.id) {
      this.foodService.delete(this.food.id).subscribe();
    }
  }
}
