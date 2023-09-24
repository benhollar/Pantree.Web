/** An interface describing a class that can be assigned from a partial representation of itself */
export interface Assignable<T> {
    /**
     * Construct a new object of this type from a partial representation
     * @param partial - A partial representation of this class
     * @returns The newly instantiated object
     */
    new(partial: Partial<T>): T;
}
