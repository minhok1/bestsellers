import { Component, Input, OnInit } from '@angular/core';
import { Book } from '../../shared/types';

@Component({
  selector: 'app-book-list-item',
  templateUrl: './book-list-item.component.html',
  styleUrls: ['./book-list-item.component.css'],
})
export class BookListItemComponent implements OnInit {
  @Input() bookInfo: Book | undefined = undefined;

  constructor() {}

  ngOnInit(): void {}
}
