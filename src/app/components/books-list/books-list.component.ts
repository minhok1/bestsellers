import { Component, Input, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Book } from '../../shared/types';
import { BookService } from '../../services/book.service';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css'],
})
export class BooksListComponent implements OnInit {
  books$: Observable<Book[]> | undefined = undefined;
  isListSearch: boolean = false;
  subscription: Subscription | undefined = undefined;
  expanded: number | undefined = undefined;

  constructor(
    private bookService: BookService,
    private searchService: SearchService
  ) {
    this.subscription = this.searchService
      .onSearchSubmit()
      .subscribe((value: any) => {
        if (value) {
          this.isListSearch = true;
          this.books$ = this.bookService.getSearchBooks(value[0], value[1]);
        } else {
          this.isListSearch = false;
          this.books$ = this.bookService.getCurrentBooks();
        }
      });
  }

  ngOnInit(): void {
    this.books$ = this.bookService.getCurrentBooks();
  }

  onItemClick(index: number, book: Book) {
    this.expanded = index;
  }
}
