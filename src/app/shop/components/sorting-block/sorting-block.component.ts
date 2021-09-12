import { Component } from '@angular/core';
import { SortSettingsService } from '../../services/sort-settings.service';

@Component({
  selector: 'app-sorting-block',
  templateUrl: './sorting-block.component.html',
  styleUrls: ['./sorting-block.component.scss'],
})
export class SortingBlockComponent {
  constructor(private sortSettingsService: SortSettingsService) {}

  sortByRating(): void {
    this.sortSettingsService.sortByRating();
  }

  sortByPrice(): void {
    this.sortSettingsService.sortByPrice();
  }
}
