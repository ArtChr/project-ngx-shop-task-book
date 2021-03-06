import {
  Component,
  ChangeDetectionStrategy, Input, Output, EventEmitter,
} from '@angular/core';
import { IProduct } from '../../../../../shared/mocks/1-components/product';

@Component({
  selector: 'ngx-shop-content-product',
  templateUrl: './product-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoryProductComponent {

  @Input()
  public product: IProduct = {} as IProduct;

  @Output()
  public addToCart: EventEmitter<void> = new EventEmitter<void>();

  @Output()
  public goToProduct: EventEmitter<void> = new EventEmitter<void>();

  public addToBasket(): void {
    this.addToCart.emit();
  }

  public redirectTo(): void {
    this.goToProduct.emit();
  }

}
