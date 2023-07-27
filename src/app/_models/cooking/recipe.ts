import { Identifiable } from "../interfaces";
import { Ingredient } from "./ingredient";
import { Nutrition } from "./nutrition";

/** A collection of instructions and ingredients to prepare a meal */
export class Recipe implements Identifiable {
    id: string | null = null;

    /** The name of the recipe */
    name: string = 'New Recipe';

    /** A longer description of the recipe */
    description: string | null = null;

    /** The ordered instructions for preparing the recipe */
    instructions: string[] = [];

    /** The ingredients needed to prepare the recipe */
    ingredients: Ingredient[] = [];

    /** The number of servings the recipe prepares */
    servings: number | null = null;

    /** The amount of hands-on preparation time to make the recipe */
    preparationTime: number | null = null;

    /** The amount of time spent cooking the ingredients */
    cookingTime: number | null = null;

    /** The sum of `preparationTime` and `cookingTime`, forming the expected amount of time to fully prepare the meal */
    totalTime: number | null = null;

    /** The nutritional value of the entire recipe */
    totalNutrition: Nutrition | null = null;

    /** The nutritional value of each serving of the recipe */
    nutritionPerServing: Nutrition | null = null;
}
