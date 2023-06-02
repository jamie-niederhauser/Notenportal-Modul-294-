import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../environments/environment';
import { Klasse } from '../data/klasse';

@Injectable({
  providedIn: 'root'
})
export class klassenService {

  readonly backendUrl = 'klasse';

  constructor(private http: HttpClient) {
  }

  public getList(): Observable<Klasse[]> {
    return this.http.get<Klasse[]>(environment.backendBaseUrl + this.backendUrl);
  }

  public getOne(id: number): Observable<Klasse> {
    return this.http.get<Klasse>(environment.backendBaseUrl + this.backendUrl + `/${id}`);
  }

  public update(Klasse: Klasse): Observable<Klasse> {
    return this.http.put<Klasse>(environment.backendBaseUrl + this.backendUrl + `/${Klasse.id}`, Klasse);
  }

  public save(Klasse: Klasse): Observable<Klasse> {
    return this.http.post<Klasse>(environment.backendBaseUrl + this.backendUrl, Klasse);
  }

  public delete(id: number): Observable<HttpResponse<string>> {
    return this.http.delete<string>(environment.backendBaseUrl + this.backendUrl + `/${id}`, {observe: 'response'});
  }
}
