import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule } from '@angular/forms';

import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';

import {
  AppComponent, RecipeListComponent, HomeComponent, FoodListComponent, PantryComponent, MealPlanComponent,
  MainNavigationComponent, RecipeCardComponent, RecipeDetailComponent, FoodDetailComponent
} from './_components';


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
    FoodDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatButtonModule,
    MatTooltipModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
/** The application's base module */
export class AppModule { }
