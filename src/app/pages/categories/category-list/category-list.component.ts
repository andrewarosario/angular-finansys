import { Component } from '@angular/core';
import { CategoryService } from '../shared/category.service';
import { Category } from '../shared/category.model';
import { BaseResourceListComponent } from 'src/app/shared/components/base-resource-list/base-resource-list.component';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent extends BaseResourceListComponent<Category> {

  // get categories() {
  //   return this.resources;
  // }

  constructor(
    private categoryService: CategoryService
  ) {
    super(categoryService);
  }


}
