import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule }  from '@angular/router';
import { FormsModule }  from '@angular/forms';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { HttpModule } from '@angular/http';


import { SearchService } from './search.service';
import {ProductDetailsService} from './product-details.service';
import {UserLoginService} from './user-login.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { SiteMapComponent } from './site-map/site-map.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { HomepageComponent } from './homepage/homepage.component';
import { BridesPageComponent } from './brides-page/brides-page.component';
import { ProductPageMainComponent } from './product-page-main/product-page-main.component';
import { ProductReviewLineComponent } from './product-review-line/product-review-line.component';
import { SignInPageComponent } from './sign-in-page/sign-in-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { BridesmaidsPageComponent } from './bridesmaids-page/bridesmaids-page.component';
import { ShoesPageComponent } from './shoes-page/shoes-page.component';
import { MyAccountComponent } from './my-account/my-account.component';

const routes:Routes = [
  {path: '', pathMatch: 'full', component:HomepageComponent},
  {path: 'brides', component:BridesPageComponent},
  {path: 'bridesmaids', component: BridesmaidsPageComponent},
  {path: 'shoes', component: ShoesPageComponent},
  {path: 'product/:productName', component: ProductPageMainComponent},
  {path: 'sign-in', component:SignInPageComponent},
  {path: 'register', component:RegisterPageComponent},
  {path: 'registered', component:MyAccountComponent},
  {path: 'forgot', component:ForgotPasswordComponent},
  {path: 'myAccount/wishlist', component:WishlistComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainNavComponent,
    SiteMapComponent,
    SideBarComponent,
    HomepageComponent,
    BridesPageComponent,
    ProductPageMainComponent,
    ProductReviewLineComponent,
    SignInPageComponent,
    RegisterPageComponent,
    ForgotPasswordComponent,
    WishlistComponent,
    BridesmaidsPageComponent,
    ShoesPageComponent,
    MyAccountComponent,
  ],
  imports: [
    BrowserModule,
    AngularFontAwesomeModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    SearchService,
    ProductDetailsService,
    UserLoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
