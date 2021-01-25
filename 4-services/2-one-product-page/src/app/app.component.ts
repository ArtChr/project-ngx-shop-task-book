import { Component, OnInit } from '@angular/core';
import { ProductsService } from './services/products/products.service';
import { Observable } from 'rxjs/internal/Observable';
import { IProduct } from '../../../../shared/mocks/4-services/product-information';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  public title = 'Компонент страницы продукта';
  public products = null;
  public product$: Observable<IProduct> = null;

  constructor(
    private productsService: ProductsService,
  ) {
  }

  ngOnInit(): void {
    this.product$ = this.productsService.getProductById(
      'korpus-cougar-gemini-m-385tmb00001-seryj'
    );
  }
}
