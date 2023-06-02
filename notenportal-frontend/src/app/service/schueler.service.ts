import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../environments/environment';
import { Schueler } from '../data/schueler';

@Injectable({
  providedIn: 'root'
})
export class SchuelerService {

  readonly backendUrl = 'schueler';

  constructor(private http: HttpClient) {
  }

  public getList(): Observable<Schueler[]> {
    return this.http.get<Schueler[]>(environment.backendBaseUrl + this.backendUrl);
  }

  public getOne(id: number): Observable<Schueler> {
    return this.http.get<Schueler>(environment.backendBaseUrl + this.backendUrl + `/${id}`);
  }

  public update(Schueler: Schueler): Observable<Schueler> {
    return this.http.put<Schueler>(environment.backendBaseUrl + this.backendUrl + `/${Schueler.id}`, Schueler);
  }

  public save(Schueler: Schueler): Observable<Schueler> {
    return this.http.post<Schueler>(environment.backendBaseUrl + this.backendUrl, Schueler);
  }

  public delete(id: number): Observable<HttpResponse<string>> {
    return this.http.delete<string>(environment.backendBaseUrl + this.backendUrl + `/${id}`, {observe: 'response'});
  }
}
