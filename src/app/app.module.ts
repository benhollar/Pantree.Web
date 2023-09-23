import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  AppComponent, RecipeListComponent, HomeComponent, FoodListComponent, PantryComponent, MealPlanComponent,
  MainNavigationComponent, RecipeCardComponent, RecipeDetailComponent
} from './_components';
import { TooltipDirective } from './_directives/';

@NgModule({
  declarations: [
    AppComponent,
    RecipeListComponent,
    HomeComponent,
    FoodListComponent,
    PantryComponent,
    MealPlanComponent,
    MainNavigationComponent,
    RecipeCardComponent,
    RecipeDetailComponent,
    TooltipDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FontAwesomeModule
  ],
  exports: [
    TooltipDirective
  ],
  providers: [],
  bootstrap: [AppComponent]
})
/** The application's base module */
export class AppModule { }
