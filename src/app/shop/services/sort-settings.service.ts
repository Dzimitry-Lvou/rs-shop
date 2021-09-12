import { Injectable } from '@angular/core';
import { SortSettingsModel } from '../models/sort-settings.model';

@Injectable({
  providedIn: 'root',
})
export class SortSettingsService {
  private settings: SortSettingsModel = { byRating: false, byPrice: false };

  sortByRating(): void {
    this.settings = { byRating: true, byPrice: false };
  }

  sortByPrice(): void {
    this.settings = { byRating: false, byPrice: true };
  }

  getSettings(): SortSettingsModel {
    return this.settings;
  }
}
