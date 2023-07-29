import { Component, Input } from '@angular/core';
import { Recipe } from 'src/app/_models/cooking/recipe';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.css']
})
/** A recipe card offering a preview of a recipe */
export class RecipeCardComponent {
  @Input() recipe: Recipe = new Recipe({ name: 'Placeholder' });
}
