import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ICategory, ISubCategory } from '../../../../../shared/mocks/3-directives/categories';

@Component({
  selector: 'ngx-shop-category-dropdown',
  templateUrl: './category-dropdown.component.html',
})
export class CategoryDropdownComponent {

  @Input()
  public categories: ICategory[] = [];

  @Output()
  public subCategorySelectEvent: EventEmitter<string> = new EventEmitter<string>();

  public currentCategory = '';
  public currentIndex = null;

  public subCategorySelect(subCat: ISubCategory): void {
    this.currentCategory = subCat._id;
    this.subCategorySelectEvent.emit(subCat.name);
  }

  public showSubCategories(idx: number): void {
    this.currentIndex = idx;
  }

}
