import { Injectable } from "@angular/core";
import { ICat } from "./cat";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError, tap } from "rxjs/operators";

@Injectable({
  providedIn: 'root'  //service is accessable from any component in application
})
export class CatService {

  private productUrl = 'api/products/products.json'; //this should be webservice address

  constructor(private http: HttpClient) { }

  getCats(): Observable<ICat[]> {
    return this.http.get<ICat[]>(this.productUrl).pipe(tap(data => console.log("All: "
      + JSON.stringify(data))), catchError(this.handleError));
  }

  private handleError(err: HttpErrorResponse) {
    let errorMessage = "";
    if (err.error instanceof ErrorEvent) {
      errorMessage = "An error occurred: ${err.error.message}";
    } else {
      errorMessage = "Server returned code: ${err.status}, error message is: ${err.message}";
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
