import { CategoriesService } from './services/categories/category.service';
import { Component, OnInit } from '@angular/core';
import { ICategory } from '../../../../shared/mocks/4-services/categories';
import { IProduct } from '../../../../shared/mocks/4-services/products';
import { Observable } from 'rxjs/internal/Observable';
import { ProductsService } from './services/products/products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {

  public categories$: Observable<ICategory[]> = null;
  public products$: Observable<IProduct[]> = null;
  public title = 'Компонент домашней страницы';

  constructor(
    private productsService: ProductsService,
    private categoriesService: CategoriesService,
  ) {
  }

  ngOnInit(): void {
    this.products$ = this.productsService.getProducts();
    this.categories$ = this.categoriesService.getCategories();
  }

}
