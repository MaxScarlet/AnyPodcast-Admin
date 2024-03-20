import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// import { environment } from '../../environment';

@Injectable({
  providedIn: 'root',
})
export class LoggerService {
  private mainUrl: string = `http://localhost:4064/logrec`;

  private headers = new HttpHeaders({
    'Content-Type': 'application/json',
  });

  constructor(private http: HttpClient) {}

  get<T>(filter: any): Observable<T[]> {
    console.log(filter);

    let params = new HttpParams();
    Object.keys(filter).forEach(
      (key) => (params = params.append(key, filter[key]))
    );
    console.log(params);

    const response = this.http.get(`${this.mainUrl}`, {
      headers: this.headers,
      params,
    }) as Observable<T[]>;
    return response;
  }

  getByID<T>(id: string): Observable<T> {
    const fullUrl: string = `${this.mainUrl}/${id}`;
    const response = this.http.get(fullUrl, {
      headers: this.headers,
    }) as Observable<T>;
    return response;
  }

  delete<T>(id: string): Observable<T> {
    const fullUrl: string = `${this.mainUrl}/${id}`;
    const response = this.http.delete(fullUrl, {
      headers: this.headers,
    }) as Observable<T>;
    return response;
  }

  //   create<T>(episode: any): Observable<T> {
  //     const fullUrl: string = `${this.mainUrl}`;
  //     const response = this.http.post(fullUrl, episode, {
  //       headers: this.headers,
  //     }) as Observable<T>;
  //     return response;
  //   }

  //   update<T>(episode: any, id: string): Observable<T> {
  //     const fullUrl: string = `${this.mainUrl}/${id}`;
  //     const response = this.http.put(fullUrl, episode, {
  //       headers: this.headers,
  //     }) as Observable<T>;
  //     return response;
  //   }
}
