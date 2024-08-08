import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private dbUrl = 'assets/db.json';
  constructor(private http: HttpClient) { }
  users: any[] = [];
  getUsers(): Observable<any[]> {
  
    return this.http.get<any[]>(`${this.dbUrl}`)
      
  }
  
}
