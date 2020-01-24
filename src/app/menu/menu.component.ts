import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../_models/menu-item';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  items: MenuItem[] = [];

  constructor() { } // private menuService: MenuService

  ngOnInit() {
    this.items.push(new MenuItem('Главная', '/home'));
    this.items.push(new MenuItem('Бронирование', '/booking'));
  }

}
