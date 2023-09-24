import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Recipe } from 'src/app/_models/cooking/recipe';
import { RecipeService } from 'src/app/_services/recipe/recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
/** A component to view and modify recipes */
export class RecipeListComponent {
  /** The recipes to list */
  public recipes: Observable<Recipe[]>;

  /**
   * Construct a new `RecipeListComponent` with dependency-injected services
   * @param recipeService - The recipe management service
   */
  public constructor(private recipeService: RecipeService) {
    this.recipes = this.recipeService.getAll();
  }
}
