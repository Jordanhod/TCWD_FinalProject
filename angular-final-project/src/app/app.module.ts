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
import { BridesProductPageComponent } from './brides-product-page/brides-product-page.component';
import { ProductPageMainComponent } from './product-page-main/product-page-main.component';
import { BridesImgComponent } from './brides-img/brides-img.component';
import { ProductReviewLineComponent } from './product-review-line/product-review-line.component';
import { SignInPageComponent } from './sign-in-page/sign-in-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { BridesmaidsPageComponent } from './bridesmaids-page/bridesmaids-page.component';
import { BridesmaidsImgComponent } from './bridesmaids-img/bridesmaids-img.component';
import { BridesmaidsProductPageComponent } from './bridesmaids-product-page/bridesmaids-product-page.component';
import { ShoesPageComponent } from './shoes-page/shoes-page.component';
import { ShoesImgComponent } from './shoes-img/shoes-img.component';
import { ShoesProductPageComponent } from './shoes-product-page/shoes-product-page.component';
import { MyAccountComponent } from './my-account/my-account.component';

const routes:Routes = [
  {path: '', pathMatch: 'full', component:HomepageComponent},
  {path: 'brides', component:BridesPageComponent},
  {path: 'bridesmaids', component: BridesmaidsPageComponent},
  {path: 'shoes', component: ShoesPageComponent},
  {path: 'brides/:productName', component: BridesProductPageComponent},
  {path: 'bridesmaids/:productName', component: BridesmaidsProductPageComponent},
  {path: 'shoes/:productName', component: ShoesProductPageComponent},
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
    BridesProductPageComponent,
    ProductPageMainComponent,
    ProductReviewLineComponent,
    SignInPageComponent,
    RegisterPageComponent,
    ForgotPasswordComponent,
    WishlistComponent,
    BridesImgComponent,
    BridesmaidsPageComponent,
    BridesmaidsImgComponent,
    BridesmaidsProductPageComponent,
    ShoesPageComponent,
    ShoesImgComponent,
    ShoesProductPageComponent,
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
