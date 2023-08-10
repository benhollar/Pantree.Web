import { Component, Input } from '@angular/core';
import { Recipe } from 'src/app/_models/cooking/recipe';
import { IconsService } from 'src/app/_services';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.css']
})
/** A recipe card offering a preview of a recipe */
export class RecipeCardComponent {
  @Input() recipe: Recipe = new Recipe({ name: 'Placeholder' });

  /**
   * Construct a new `RecipeCardComponent`
   * @param icons - A dependency-injected service for retrieving icons
   */
  constructor(public icons: IconsService) { }
}
