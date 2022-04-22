import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/burger-menu/menu.component';
import { AddClassOnClickModule } from './directive/add-class-on-click/add-class-on-click.module';
import { FullMenuComponent } from './components/full-menu/full-menu.component';
import { FullMenuModule } from './components/full-menu/full-menu.module';

@NgModule({
  declarations: [AppComponent, HeaderComponent, MenuComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    BrowserAnimationsModule,
    AddClassOnClickModule,
    FullMenuModule,
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
