import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  constructor() {}

  private category: string = '';

  setFilterData(category: string) {
    this.category = category;
  }

  getFilterData() {
    return this.category;
  }

  clearFilterData() {
    this.category = '';
  }
}
