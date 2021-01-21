import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProduct } from '../../../../../../shared/mocks/4-services/products';
import { Observable } from 'rxjs/internal/Observable';
import { pluck } from 'rxjs/operators';

@Injectable()
export class ProductsService {

  constructor(
    private http: HttpClient,
  ) {
  }

  public getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(`api/products/suggestion`)
      .pipe(pluck('items'));
  }

}
