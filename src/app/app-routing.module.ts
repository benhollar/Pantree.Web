import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  HomeComponent, RecipeListComponent, FoodListComponent, PantryComponent, MealPlanComponent, RecipeDetailComponent,
  FoodDetailComponent
} from './_components';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'recipes', component: RecipeListComponent },
  { path: 'recipes/:id', component: RecipeDetailComponent },
  { path: 'foods', component: FoodListComponent },
  { path: 'foods/:id', component: FoodDetailComponent },
  { path: 'pantry', component: PantryComponent },
  { path: 'planning', component: MealPlanComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
/** The application's routing configuration */
export class AppRoutingModule { }
