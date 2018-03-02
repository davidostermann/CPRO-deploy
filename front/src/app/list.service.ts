import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth.service';

@Injectable()
export class ListService {
  constructor(private http: HttpClient, private auth: AuthService) {}

  private getOptions(): any  {
    return { headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: this.auth.getToken() || ''
      }) };
  }

  getAll(): Observable<any> {
    return this.http.get('/api/lists/full', this.getOptions());
  }
}
