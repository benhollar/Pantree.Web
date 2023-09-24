import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Recipe } from 'src/app/_models/cooking/recipe';
import { RecipeService } from 'src/app/_services/recipe/recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
/** A dedicated page for viewing a full recipe */
export class RecipeDetailComponent implements OnInit {
  /** The recipe being viewed */
  recipe: Recipe = new Recipe({});

  /**
   * Construct a new `RecipeDetailComponent` with dependency-injected services
   * @param recipeService - The recipe management service
   * @param route - The route used to open the component, expected to hold a recipe ID
   */
  public constructor(private recipeService: RecipeService, private route: ActivatedRoute) { }

  /** Initialize the component */
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    // TODO: should reject routes with an unknown ID
    if (id != null) {
      this.recipeService.getSingle(id).subscribe((recipe) => {
        this.recipe = recipe;
      });
    }
  }
}
