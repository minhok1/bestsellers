import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const apiUrl = 'https://api.nytimes.com/svc/books/v3/lists/';
const apiKey = 'WtR8d6QrEwJYtoBieQA0rjVlRzvJNnk5';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  constructor(private http: HttpClient) {}

  getCurrentBooks() {
    return this.http.get(
      `${apiUrl}/current/combined-print-and-e-book-fiction.json?api-key=${apiKey}`
    );
  }
}
