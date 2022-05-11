import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  readonly apiURL = 'http://127.0.0.1:8000';


  constructor(private http: HttpClient) { }

  getPrediccion(palabra:any): Observable<any[]> {
    return this.http.get<any[]>(this.apiURL + '/palabra/'+ palabra)
  }

  OnInit(): void {
  }
}
