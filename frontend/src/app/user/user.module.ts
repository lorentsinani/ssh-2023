import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart/cart.component';
import { AccountComponent } from './account/account.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { AboutComponent } from './about/about.component';
import { CategoryComponent } from './category/category.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularPaginatorModule } from './product/paginator/paginator.module';

import { UserRoutingModule } from './user-routing.module';
import { ProductCarouselComponent } from './home/product-carousel/product-carousel.component';
import { ProductCategoryComponent } from './home/product-category/product-category.component';
import { NewArrivalsComponent } from './home/new-arrivals/new-arrivals.component';
import { FlashSaleComponent } from './home/flash-sale/flash-sale.component';
import { ProductSummaryComponent } from './productdetails/product-summary/product-summary.component';
import { ProductInformationComponent } from './productdetails/product-information/product-information.component';
import { SlideshowCarouselComponent } from './home/product-carousel/slideshow-carousel/slideshow-carousel.component';
import { SideImageCarouselComponent } from './home/product-carousel/side-image-carousel/side-image-carousel.component';
import { CategoryItemComponent } from './home/product-category/category-item/category-item.component';
import { NewArrivalsItemComponent } from './home/new-arrivals/new-arrivals-item/new-arrivals-item.component';
import { FlashSaleItemComponent } from './home/flash-sale/flash-sale-item/flash-sale-item.component';
import { SideImageCarouselItemComponent } from './home/product-carousel/side-image-carousel/side-image-carousel-item/side-image-carousel-item.component';
import { HelpCenterComponent } from './help-center/help-center.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { ContactInfoComponent } from './contact/contact-info/contact-info.component';
import { ContactFormComponent } from './contact/contact-form/contact-form.component';
import { PaginationComponent } from './product/pagination/pagination.component';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from '../core/core.module';
import { UserComponent } from './user.component';

@NgModule({
  declarations: [
    CartComponent,
    AccountComponent,
    BlogComponent,
    ContactComponent,
    HomeComponent,
    ProductComponent,
    AboutComponent,
    CategoryComponent,
    ProductCarouselComponent,
    ProductCategoryComponent,
    NewArrivalsComponent,
    FlashSaleComponent,
    ProductdetailsComponent,
    ProductSummaryComponent,
    ProductInformationComponent,
    SlideshowCarouselComponent,
    SideImageCarouselComponent,
    CategoryItemComponent,
    NewArrivalsItemComponent,
    FlashSaleItemComponent,
    SideImageCarouselItemComponent,
    HelpCenterComponent,
    PrivacyPolicyComponent,
    ContactInfoComponent,
    ContactFormComponent,
    PaginationComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    MatCardModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AngularPaginatorModule,
    HttpClientModule,
    CoreModule
  ]
})
export class UserModule {}
