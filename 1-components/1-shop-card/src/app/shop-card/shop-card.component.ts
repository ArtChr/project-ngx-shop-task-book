import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { ICartProduct } from '../../../../../shared/mocks/1-components/cart-product';

@Component({
  selector: 'app-shop-card',
  templateUrl: './shop-card.component.html',
})

export class ShopCardComponent {

  @Input()
  public product: ICartProduct = {} as ICartProduct;

  @Output()
  public decrement: EventEmitter<void> = new EventEmitter<void>();

  @Output()
  public increment: EventEmitter<void> = new EventEmitter<void>();

  public decrementProductInCart() {
    this.decrement.emit();
  }

  public incrementProductInCart() {
    this.increment.emit();
  }

}
