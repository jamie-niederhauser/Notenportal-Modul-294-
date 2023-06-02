import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../environments/environment';
import { Schulfach } from '../data/schulfach';

@Injectable({
  providedIn: 'root'
})
export class SchulfachService {

  readonly backendUrl = 'schulfach';

  constructor(private http: HttpClient) {
  }

  public getList(): Observable<Schulfach[]> {
    return this.http.get<Schulfach[]>(environment.backendBaseUrl + this.backendUrl);
  }

  public getOne(id: number): Observable<Schulfach> {
    return this.http.get<Schulfach>(environment.backendBaseUrl + this.backendUrl + `/${id}`);
  }

  public update(Schulfach: Schulfach): Observable<Schulfach> {
    return this.http.put<Schulfach>(environment.backendBaseUrl + this.backendUrl + `/${Schulfach.id}`, Schulfach);
  }

  public save(Schulfach: Schulfach): Observable<Schulfach> {
    return this.http.post<Schulfach>(environment.backendBaseUrl + this.backendUrl, Schulfach);
  }

  public delete(id: number): Observable<HttpResponse<string>> {
    return this.http.delete<string>(environment.backendBaseUrl + this.backendUrl + `/${id}`, {observe: 'response'});
  }
}
