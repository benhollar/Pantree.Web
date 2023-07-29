import { Injectable } from '@angular/core';
import { Nutrition } from 'src/app/_models/cooking/nutrition';
import { Recipe } from 'src/app/_models/cooking/recipe';

@Injectable({
  providedIn: 'root'
})
/** A singleton service for managing recipes */
export class RecipeService {
  recipes: Recipe[] = Array.from({ length: 20 }, (_, idx) =>
    new Recipe({
      id: idx.toString(),
      name: 'Corn Casserole', description: 'An easy-to-make, creamy cornbread casserole.',
      servings: this.getRandom(1, 6),
      totalTime: this.getRandom(20, 60),
      nutritionPerServing: new Nutrition({
        calories: this.getRandom(100, 200),
        carbohydrates: this.getRandom(0, 20),
        totalFat: this.getRandom(0, 20),
        protein: this.getRandom(0, 20)
      })
    }),
  );

  /** TODO: remove */
  getRandom(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
}
