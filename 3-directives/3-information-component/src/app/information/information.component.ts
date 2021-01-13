import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from '../../../../../shared/mocks/3-directives/product-information';

@Component({
  selector: 'ngx-shop-information',
  templateUrl: './information.component.html',
})
export class InformationComponent {

  @Input()
  public product: IProduct = null;

  @Output()
  public addToCart: EventEmitter<string> = new EventEmitter<string>();

  public isShow = false;

  public addToBasket(): any {
    this.addToCart.emit();
  }

  public show(): any {
    this.isShow = !this.isShow;
  }

}
