import { Identifiable } from "../interfaces";
import { Measurement } from "./measurement";
import { Nutrition } from "./nutrition";

/** A unique food item */
export class Food implements Identifiable {
    id: string | null = null;

    /** The name of the food */
    name: string = 'New Food';

    /** The nutritional value of the food per base `measurement` */
    nutrition: Nutrition | null = null;

    /** The base quantity of the food per nutritional serving */
    measurement: Measurement = { unit: 'unit', value: 1 };

    /**
     * Construct a new `Food` from a partial representation
     * @param partial - An optional partial representation of a `Food` to base the new object upon
     * @returns The newly instantiated object
     */
    public constructor(partial?: Partial<Food>) {
        if (partial) {
            Object.assign(this, partial);
        }
    }
}
