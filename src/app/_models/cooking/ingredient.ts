import { Identifiable } from "../interfaces";
import { Food } from "./food";
import { Measurement } from "./measurement";
import { Nutrition } from "./nutrition";

/** A combination of a food and a quantity to be used in a recipe */
export class Ingredient implements Identifiable {
    id: string | null = null;

    /** The food the ingredient references */
    food: Food = new Food();

    /** The nutritional value of the food in the `quantity` specified */
    nutrition: Nutrition | null = null;

    /** The amount of the food needed */
    quantity: Measurement = { unit: 'unit', value: 1 };
}
