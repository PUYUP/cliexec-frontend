import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Endpoints } from '../endpoint';

@Injectable({
  providedIn: 'root',
})
export class ReactionService {
  constructor(private httpClient: HttpClient) {}

  loadReactions(data: any = {}): Observable<any> {
    let url = data?.url && data?.isLoadMore ? data?.url : Endpoints.reaction;

    return this.httpClient.get(url).pipe(
      map((response: any) => {
        return response;
      })
    );
  }

  createReaction(data: {}): Observable<any> {
    return this.httpClient.post(Endpoints.reaction, data).pipe(
      map((response: any) => {
        return response;
      })
    );
  }

  updateReaction(data: {}, uuid: string): Observable<any> {
    return this.httpClient.patch(Endpoints.reaction + uuid + '/', data).pipe(
      map((response: any) => {
        return response;
      })
    );
  }
}
