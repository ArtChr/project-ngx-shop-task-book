import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IProduct } from '../../../../../../shared/mocks/4-services/products';

@Component({
  selector: 'ngx-shop-product-card',
  templateUrl: './product-card.component.html',
})
export class ProductCardComponent {

  @Input()
  public product: IProduct = null;

  @Output()
  public goToProduct: EventEmitter<void> = new EventEmitter<void>();

  public redirectTo(): void {
    this.goToProduct.emit();
  }

}
