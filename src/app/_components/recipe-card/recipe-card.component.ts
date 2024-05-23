import { Component, Input, OnInit } from '@angular/core';
import { take } from 'rxjs';
import { Recipe } from 'src/app/_models/cooking/recipe';
import { IconsService, RecipeService } from 'src/app/_services';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.css']
})
/** A recipe card offering a preview of a recipe */
export class RecipeCardComponent implements OnInit {
  /** The recipe displayed on the card */
  @Input() recipe: Recipe = new Recipe({ name: 'Placeholder' });

  /** The default placeholder image to use while real imagery loads from the remote source */
  readonly DEFAULT_IMAGE_URL: string = "url(assets/img/recipe-placeholder.jpg)"

  /** The currently displayed image, given as a string using the CSS `url` function */
  public image: string = "url(assets/img/loading.gif)";

  /**
   * Construct a new `RecipeCardComponent`
   * @param recipeService - A dependency-injected service for managing recipes
   * @param icons - A dependency-injected service for retrieving icons
   */
  constructor(public recipeService: RecipeService, public icons: IconsService) { }

  /**
   * Initialize the recipe card component
   */
  ngOnInit() {
    this.recipeService.getRecipeImageUrl(this.recipe).pipe(take(1)).subscribe((result) => {
      if (result === null) {
        this.image = this.DEFAULT_IMAGE_URL;
      } else {
        this.image = result
      }
    });
  }
}
