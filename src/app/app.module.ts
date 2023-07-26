import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { HomeComponent } from './home/home.component';
import { FoodListComponent } from './food-list/food-list.component';
import { PantryComponent } from './pantry/pantry.component';
import { MealPlanComponent } from './meal-plan/meal-plan.component';
import { MainNavigationComponent } from './main-navigation/main-navigation.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    RecipeListComponent,
    HomeComponent,
    FoodListComponent,
    PantryComponent,
    MealPlanComponent,
    MainNavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
