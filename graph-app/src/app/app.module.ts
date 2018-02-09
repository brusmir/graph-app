import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './core/home/home.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { GraphicComponent } from './graphic/graphic.component';
import { GraphicListComponent } from './graphic/graphic-list/graphic-list.component';
import { GraphicService } from './graphic/service/graphic.service';
import { GraphItemComponent } from './graphic/graphic-list/graph-item/graph-item.component';
import { CommentComponent } from './graphic/comment/comment.component';
import { PaginationComponent } from './graphic/pagination/pagination.component';
import { PageSizeComponent } from './graphic/page-size/page-size.component';
import { ShowMoreComponent } from './graphic/graphic-list/show-more/show-more.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    GraphicComponent,
    GraphicListComponent,
    GraphItemComponent,
    CommentComponent,
    PaginationComponent,
    PageSizeComponent,
    ShowMoreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    GraphicService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
