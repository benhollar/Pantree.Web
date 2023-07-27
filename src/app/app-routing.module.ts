import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { 
  HomeComponent, RecipeListComponent, FoodListComponent, PantryComponent, MealPlanComponent
} from './_components';

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
