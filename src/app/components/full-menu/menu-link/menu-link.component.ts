import { Component, EventEmitter, HostBinding, HostListener, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-menu-link',
  templateUrl: './menu-link.component.html',
  styleUrls: ['./menu-link.component.scss'],
})
export class MenuLinkComponent implements OnInit {

  @Input() route: string[] = ['home'];
  @Input() label: string = 'label';
  @Input() ionicIconName: string = 'home-outline'
  @Input() active: boolean = false

  @HostBinding('class.active')
  get isActive () { return this.active }

  constructor(private router: Router, private menuService: MenuService) { }

  ngOnInit() {
    this.menuService.activeMenu$.subscribe( activeMenuLabel => {
      if(this.label  !== activeMenuLabel ){
        this.active = false
      }
    })
  }

  @HostListener('click')
  onClick(){
    this.router.navigate(this.route).then( _ => {
      this.active = true
      this.menuService.activeMenu = this.label
      this.menuService.openCloseMenu()
    })
  }

}
