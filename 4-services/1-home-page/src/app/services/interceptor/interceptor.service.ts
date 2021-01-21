import { BASE_URL_TOKEN } from './config';
import { catchError, filter, map } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

export interface IRes<T> {
  data: T;
  error?: string;
}

@Injectable()
export class InterceptorService implements HttpInterceptor {

  public constructor(
    @Inject(BASE_URL_TOKEN) private baseUrl: string,
  ) {
  }

  public intercept<T extends IRes<T>>(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<T>> {
    const headers: HttpHeaders = req.headers
      .append('Content-Type', 'application/json');

    const jsonReq: HttpRequest<T> = req.clone({
      url: `${ this.baseUrl }${ req.url }`,
      headers,
    });

    return next.handle(jsonReq)
      .pipe(
        filter(this.isHttpResponse),
        map((responseEvent: HttpResponse<IRes<T>>) => {
          const bodyWithoutData = responseEvent.body && responseEvent.body.data;
          return responseEvent.clone({body: bodyWithoutData});
        }),
        catchError((): Observable<never> => {
          return EMPTY;
        }),
      );
  }

  public isHttpResponse(event: HttpEvent<any>): event is HttpResponse<any> {
    return event instanceof HttpResponse;
  }

}
