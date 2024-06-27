import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Thing } from '../models/thing.model';
import { Area } from '../models/area.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  baseUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getThings() :Observable<Thing[]> {
    return this.http.get<Thing[]>(`${this.baseUrl}/things`);
  }

  getAreas() :Observable<Area[]> {
    return this.http.get<Area[]>(`${this.baseUrl}/areas`);
  }
}
