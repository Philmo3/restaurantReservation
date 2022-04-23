import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  private menuIsOpen = false;
  private menuIsOpenSubject = new Subject<boolean>();

  menuIsOpen$ = this.menuIsOpenSubject.asObservable();

  private activeMenuLabel = '';
  private activeMenuLabelSubject = new Subject<string>()

  activeMenu$ = this.activeMenuLabelSubject.asObservable()

  constructor() {}

  openCloseMenu() {
    this.menuIsOpen = !this.menuIsOpen;
    this.menuIsOpenSubject.next(this.menuIsOpen);
  }

  set activeMenu(activeMenuLabel: string){
    this.activeMenuLabel = activeMenuLabel;
    this.activeMenuLabelSubject.next(this.activeMenuLabel)
  }
}
