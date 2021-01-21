import { Component, Input } from '@angular/core';
import { ICategory } from '../../../../../shared/mocks/4-services/categories';
import { IProduct } from '../../../../../shared/mocks/4-services/products';

@Component({
  selector: 'ngx-shop-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.sass'],
})
export class HomePageComponent {

  @Input()
  public categories: ICategory[] = null;

  @Input()
  public products: IProduct[] = null;

  public goToBasket(): void {

  }

  public goToProduct(): void {

  }

  public redirectTo(): void {

  }

}
