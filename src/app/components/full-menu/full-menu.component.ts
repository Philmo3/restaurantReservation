import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';
import { openClose } from './open-close.anim';
@Component({
  selector: 'app-full-menu',
  templateUrl: './full-menu.component.html',
  styleUrls: ['./full-menu.component.scss'],
  animations: [openClose],
})
export class FullMenuComponent implements OnInit {
  isMenuOpen = false;

  constructor(private menuService: MenuService) {}

  ngOnInit() {
    this.menuService.menuIsOpen$.subscribe((open) => {
      this.isMenuOpen = open;
    });
  }
}
