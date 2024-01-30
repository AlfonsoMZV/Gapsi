import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, map } from "rxjs";
import { GraphqlOptions } from "../interface/proveedores.interface";



@Injectable()
export class GraphqlService {

  constructor(private http: HttpClient) { }
  
  public query<T>(options: GraphqlOptions): Observable<T> {
    return this.http
      .post<{ data: T }>(`/graphql`, {
	    operationName: options.operationName,
        query: options.query,
        variables: options.variables,
      })
      .pipe(map((d) => d.data));
  }

  public mutate<T>(options: GraphqlOptions): Observable<any> {
    return this.http
      .post<{ data: T }>(`/graphql`, {
	    operationName: options.operationName,
        query: options.query,
        variables: options.variables,
      })
      .pipe(map((d) => d.data));
  }
}