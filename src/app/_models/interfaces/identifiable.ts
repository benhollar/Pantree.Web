/** Any model containing a unique ID */
export interface Identifiable {
    /** The unique identifier, expected to be a valid GUID, of the object */
    id: string | null;
}
