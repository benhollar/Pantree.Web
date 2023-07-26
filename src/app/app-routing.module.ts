import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { HomeComponent } from './home/home.component';
import { FoodListComponent } from './food-list/food-list.component';
import { PantryComponent } from './pantry/pantry.component';
import { MealPlanComponent } from './meal-plan/meal-plan.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'recipes', component: RecipeListComponent },
  { path: 'foods', component: FoodListComponent },
  { path: 'pantry', component: PantryComponent },
  { path: 'planning', component: MealPlanComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
