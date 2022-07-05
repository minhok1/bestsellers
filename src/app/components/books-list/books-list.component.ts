import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../../shared/types';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css'],
})
export class BooksListComponent implements OnInit {
  @Input() title: string = 'Current';
  books$: Observable<Book[]> | undefined = undefined;

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.books$ = this.bookService.getCurrentBooks();
  }
}
