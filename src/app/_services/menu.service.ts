import { Injectable } from '@angular/core';
import { MenuItem } from '../_models/menu-item';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  items: MenuItem[] = [];

  constructor() {

  }
}
