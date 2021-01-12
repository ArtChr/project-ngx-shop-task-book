import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ICategory, ISubCategory } from '../../../../../shared/mocks/3-directives/categories';

@Component({
  selector: 'ngx-shop-side-menu',
  templateUrl: './side-menu.component.html',
})
export class SideMenuComponent {

  @Input()
  public categories: ICategory[] = [];

  @Output()
  public categoryChange: EventEmitter<string> = new EventEmitter<string>();

  public currentName: string = null;

  public redirectTo(subCategoryId: string): void {
    this.categoryChange.emit(subCategoryId);
  }

  public hover(subCategoryId: string): void {
    this.currentName = subCategoryId;
  }

  public mouseLeave(): void {
    this.currentName = null;
  }

}
