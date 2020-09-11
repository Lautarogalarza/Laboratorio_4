import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/internal/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';

const endpoint = 'https://api.mocki.io/v1/570c5e5c';

@Injectable({
  providedIn: 'root'
})
export class ListadoService {

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get(endpoint);
  }

}
