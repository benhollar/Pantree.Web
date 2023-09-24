import { Injectable } from '@angular/core';
import { Food } from 'src/app/_models/cooking/food';
import { BaseCollectionService } from '../index';
import { Assignable } from 'src/app/_models/interfaces';

@Injectable({
  providedIn: 'root'
})
/** A singleton service for managing recipes */
export class FoodService extends BaseCollectionService<Food> {
  /** The URL slug for the Pantree API for this collection type */
  public override apiRoot: string = '/foods';

  /** A reference to the class type used to instantiate new object */
  public override instantiable: Assignable<Food> = Food;
}
