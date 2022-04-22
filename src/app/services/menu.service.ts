import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  private menuIsOpen = false;
  private menuIsOpenSubject = new Subject<boolean>();

  menuIsOpen$ = this.menuIsOpenSubject.asObservable();

  constructor() {}

  openCloseMenu() {
    this.menuIsOpen = !this.menuIsOpen;
    this.menuIsOpenSubject.next(this.menuIsOpen);
  }
}
