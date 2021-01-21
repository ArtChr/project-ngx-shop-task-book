import { HttpClient } from '@angular/common/http';
import { ICategory } from '../../../../../../shared/mocks/4-services/categories';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable()
export class CategoriesService {

  constructor(
    private http: HttpClient,
  ) {
  }

  public getCategories(): Observable<ICategory[]> {
    return this.http.get<ICategory[]>(`api/categories`);
  }

}
