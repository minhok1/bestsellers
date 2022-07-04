import { Component, Input, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css'],
})
export class BooksListComponent implements OnInit {
  @Input() title: string = 'Current';
  books: any = [];

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.bookService
      .getCurrentBooks()
      .subscribe((books: any) => (this.books = books.results.books));
  }
}
