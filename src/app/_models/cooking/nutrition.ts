/** A collection of nutritional information as would be found on food labelling */
export class Nutrition {
    /** The number of calories (kCal) */
    calories: number | null = null;

    /** The amount of fat (grams) */
    totalFat: number | null = null;

    /** The amount of saturated fat (grams) */
    saturatedFat: number | null = null;

    /** The amount of trans-unsaturated fat (grams) */
    transFat: number | null = null;

    /** The amount of cholesterol (milligrams) */
    cholesterol: number | null = null;

    /** The amount of sodium (milligrams) */
    sodium: number | null = null;

    /** The amount of carbohydrates (grams) */
    carbohydrates: number | null = null;

    /** The amount of fiber (grams) */
    fiber: number | null = null;

    /** The amount of sugars (grams) */
    sugar: number | null = null;

    /** The amount of protein (grams) */
    protein: number | null = null;

    /** Construct a new `Nutrition` from a partial representation */
    public constructor(partial?: Partial<Nutrition>) {
        if (partial) {
            Object.assign(this, partial);
        }
    }
}
