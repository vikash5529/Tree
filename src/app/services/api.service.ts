import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { toHumanizeCase } from '../helpers/helper';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private readonly baseURL = 'assets/data.json';
  constructor(private httpClient: HttpClient) {}

  fetchData(): Observable<any> {
    return this.httpClient.get(this.baseURL).pipe(map((response) => toHumanizeCase(response)));
  }
}
