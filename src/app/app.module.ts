import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BooksListComponent } from './components/books-list/books-list.component';
import { BookListItemComponent } from './components/book-list-item/book-list-item.component';
import { SearchComponent } from './components/search/search.component';
import { SearchButtonComponent } from './components/search-button/search-button.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, BooksListComponent, BookListItemComponent, SearchComponent, SearchButtonComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
