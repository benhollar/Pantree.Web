import { Injectable } from '@angular/core';
import { Recipe } from 'src/app/_models/cooking/recipe';
import { BaseCollectionService } from '../index';
import { Assignable } from 'src/app/_models/interfaces';
import { environment } from 'src/environments/environment';
import { Observable, catchError, map, retry } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
/** A singleton service for managing recipes */
export class RecipeService extends BaseCollectionService<Recipe> {
  /** The URL slug for the Pantree API for this collection type */
  public override apiRoot: string = '/recipes';

  /** A reference to the class type used to instantiate new object */
  public override instantiable: Assignable<Recipe> = Recipe;

  /**
   * Get the URL to retrieve for the recipe's image
   * @param recipe - The recipe to get the image URL of
   * @returns The image URL
   */
  public getRecipeImageUrl(recipe: Recipe): Observable<string | null> {
    return this.httpClient.get(`${environment.apiUrl}${this.apiRoot}/${recipe.id}/image`, { responseType: 'blob'}).pipe(
      retry(3),
      map((result) => {
        if (result != null) {
          return `url(${URL.createObjectURL(result)})`;
        }
        return null;
      }),
      catchError(this.handleError)
    );
  }
}
