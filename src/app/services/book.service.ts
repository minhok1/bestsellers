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

  getBooks(url: string): Observable<Book[]> {
    return this.http.get(url).pipe(
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

  getCurrentBooks(): Observable<Book[]> {
    const url = `${apiUrl}/current/combined-print-and-e-book-fiction.json?api-key=${apiKey}`;
    return this.getBooks(url);
  }

  getSearchBooks(time: string, type: string): Observable<Book[]> {
    const url = `${apiUrl}/${time}/${type}.json?api-key=${apiKey}`;
    return this.getBooks(url);
  }

  //getReviews
}
