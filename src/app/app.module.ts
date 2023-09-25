import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  AppComponent, RecipeListComponent, HomeComponent, FoodListComponent, PantryComponent, MealPlanComponent,
  MainNavigationComponent, RecipeCardComponent, RecipeDetailComponent, FoodDetailComponent
} from './_components';
import { TooltipDirective } from './_directives/';
import { ReactiveFormsModule } from '@angular/forms';

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
    TooltipDirective,
    FoodDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    FontAwesomeModule,
    ReactiveFormsModule
  ],
  exports: [
    TooltipDirective
  ],
  providers: [],
  bootstrap: [AppComponent]
})
/** The application's base module */
export class AppModule { }
