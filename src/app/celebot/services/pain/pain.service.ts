import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Endpoints } from '../endpoint';

@Injectable({
  providedIn: 'root',
})
export class PainService {
  constructor(private httpClient: HttpClient) {}

  loadPains(params: any = {}): Observable<any> {
    let url = params?.url && params?.isLoadMore ? params?.url : Endpoints.pain;
    let httpParams = new HttpParams();

    for (let key in params) {
      let value = params[key];

      if (key != 'url' && key != 'type' && value) {
        httpParams = httpParams.set(key, value);
      }
    }

    return this.httpClient.get(url, { params: httpParams }).pipe(
      map((response: any) => {
        return response;
      })
    );
  }

  createPain(params: {}): Observable<any> {
    return this.httpClient.post(Endpoints.pain, params).pipe(
      map((response: any) => {
        return response;
      })
    );
  }

  updatePain(params: {}, uuid: string): Observable<any> {
    return this.httpClient.patch(Endpoints.pain + uuid + '/', params).pipe(
      map((response: any) => {
        return response;
      })
    );
  }

  deletePain(uuid: string): Observable<any> {
    return this.httpClient.delete(Endpoints.pain + uuid + '/').pipe(
      map((response: any) => {
        return response;
      })
    );
  }
}
