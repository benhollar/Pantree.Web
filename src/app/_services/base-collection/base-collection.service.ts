import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Assignable, Identifiable } from 'src/app/_models/interfaces';
import { Observable, catchError, map, retry, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
/**
 * The base interface for a service interacting with a Pantree API collection
 *
 * Implementations of this class immediately gain access to the basic create-read-update-delete (CRUD) operations for
 * their targeted collection, in addition to robust error handling for those requests.
 */
export abstract class BaseCollectionService<TCollection extends Identifiable> {
  /** The URL slug for the Pantree API for this collection type */
  public abstract apiRoot: string;

  /**
   * A reference to the class type used to instantiate new objects; classes initialized by a `BaseCollectionService`
   * must conform to the `Assignable` interface.
   */
  public abstract instantiable: Assignable<TCollection>;

  /**
   * Construct a new `BaseCollectionService`
   * @param httpClient - The HTTP client used to send and receive HTTP requests
   */
  public constructor(private httpClient: HttpClient) { }

  /**
   * Get every item belonging to the collection
   * @returns A request that, when invoked, returns the full collection of items requested
   */
  public getAll(): Observable<TCollection[]> {
    return this.httpClient.get<Partial<TCollection>[]>(environment.apiUrl + this.apiRoot).pipe(
      retry(3),
      map((resultItems) => resultItems.map((item) => new this.instantiable(item))),
      catchError(this.handleError)
    );
  }

  /**
   * Get a specific item with the given `id`
   * @param id - The identifier, a GUID, of an item to retrieve
   * @returns A request that, when invoked, returns the item requested
   */
  public getSingle(id: string): Observable<TCollection> {
    return this.httpClient.get<Partial<TCollection>>(environment.apiUrl + this.apiRoot + `/${id}`).pipe(
      retry(3),
      map((result) => new this.instantiable(result)),
      catchError(this.handleError)
    );
  }

  /**
   * Add the provided `item` to the global collection
   *
   * If the provided `item` has an ID, and that ID already exists in the Pantree database, no new item will be created;
   * instead, the entity with that ID will be edited to match the `item` provided here.
   *
   * @param item - The new item to add
   * @returns A request that, when invoked, adds the item and returns the item as populated by the API server
   */
  public add(item: TCollection): Observable<TCollection> {
    return this.httpClient.post<Partial<TCollection>>(environment.apiUrl + this.apiRoot, item).pipe(
      retry(3),
      map((result) => new this.instantiable(result)),
      catchError(this.handleError)
    );
  }

  /**
   * Edit an entity to match the state of the provided `item`
   * @param item - The item to edit; the ID of this item must match an existing entity from the API
   * @returns A request that, when invoked, edits the item and returns nothing
   */
  public edit(item: TCollection): Observable<void> {
    return this.httpClient.put<void>(environment.apiUrl + this.apiRoot + `/${item.id}`, item).pipe(
      retry(3),
      catchError(this.handleError)
    );
  }

  /**
   * Delete an entity
   * @param id - The identifier, a GUID, of an item to delete
   * @returns A request that, when invoked, deletes the item and returns nothing
   */
  public delete(id: string): Observable<void> {
    return this.httpClient.delete<void>(environment.apiUrl + this.apiRoot + `/${id}`).pipe(
      retry(3),
      catchError(this.handleError)
    );
  }

  // TODO: update error handling
  /**
   * A minimal HTTP error handler
   * @param error - The HTTP error to handle
   * @returns An observable with a user-ready error message
   */
  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}
