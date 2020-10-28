import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './header/header.component';
import { OffersComponent } from './offers/offers.component';
import { OfferComponent } from './offer/offer.component';
import { BoxComponent } from './box/box.component';
import { AppComponent } from './app/app.component';
import { UserComponent } from './user/user.component';
import { FooterComponent } from './footer/footer.component';
import { ButtonComponent } from './button/button.component';
import { AppBoxComponent } from './app-box/app-box.component';
import { AlertComponent } from './alert/alert.component';

const routes: Routes = [
  { path: '', component: AppComponent },
];

@NgModule({
  declarations: [
    MenuComponent,
    HeaderComponent,
    OffersComponent,
    OfferComponent,
    BoxComponent,
    AppComponent,
    UserComponent,
    FooterComponent,
    ButtonComponent,
    AppBoxComponent,
    AlertComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class MainPageModule { }
