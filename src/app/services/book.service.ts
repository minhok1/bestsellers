import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, tap } from 'rxjs';
import { Book } from '../shared/types';

const apiUrl = 'https://api.nytimes.com/svc/books/v3/lists/';
const apiKey = 'WtR8d6QrEwJYtoBieQA0rjVlRzvJNnk5';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  constructor(private http: HttpClient) {}

  getCurrentBooks(): Observable<Book[]> {
    return this.http
      .get(
        `${apiUrl}/current/combined-print-and-e-book-fiction.json?api-key=${apiKey}`
      )
      .pipe(
        map((response: any) => response.results.books),
        map((books: any) => {
          return books.map((book: any) => ({
            id: book.primary_isbn13,
            title: book.title,
            author: book.author,
            cover: book.book_image,
            description: book.description,
            showReviews: false,
          }));
        })
      );
  }
}
