import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { 
  AppComponent, RecipeListComponent, HomeComponent, FoodListComponent, PantryComponent, MealPlanComponent,
  MainNavigationComponent
} from './_components';

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
/** The application's base module */
export class AppModule { }
