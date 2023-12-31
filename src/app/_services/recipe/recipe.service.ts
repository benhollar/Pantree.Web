import { Injectable } from '@angular/core';
import { Recipe } from 'src/app/_models/cooking/recipe';
import { BaseCollectionService } from '../index';
import { Assignable } from 'src/app/_models/interfaces';

@Injectable({
  providedIn: 'root'
})
/** A singleton service for managing recipes */
export class RecipeService extends BaseCollectionService<Recipe> {
  /** The URL slug for the Pantree API for this collection type */
  public override apiRoot: string = '/recipes';

  /** A reference to the class type used to instantiate new object */
  public override instantiable: Assignable<Recipe> = Recipe;
}
