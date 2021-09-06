import { Component } from '@angular/core';
import { CategoryModel } from 'src/app/core/models/category.model';
import { CategoryService } from 'src/app/core/services/category.service';

@Component({
  selector: 'app-navigation-block',
  templateUrl: './navigation-block.component.html',
  styleUrls: ['./navigation-block.component.scss'],
})
export class NavigationBlockComponent {
  categories: CategoryModel[] = [];

  constructor(private categoryService: CategoryService) {
    this.categoryService.categories$.subscribe((value) => {
      this.categories = value;
    });
  }
}
