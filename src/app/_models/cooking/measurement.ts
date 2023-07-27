/** A quantity of food */
export class Measurement {
    /** The unit describing the quantity */
    public unit: 'unit' | 'gram' | 'milligram' | 'ounce' | 'pound' | 'milliliter' | 'liter' | 'teaspoon' |
                 'tablespoon' | 'fluid ounce' | 'cup' = 'unit';

    /** The number of `unit` measurements to produce the desired quantity */
    public value: number = 1
}
