import {
  Component,
  Input,
  OnInit,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { Book } from '../../shared/types';

@Component({
  selector: 'app-book-list-item',
  templateUrl: './book-list-item.component.html',
  styleUrls: ['./book-list-item.component.css'],
})
export class BookListItemComponent implements OnInit, OnChanges {
  @Input() isExpanded: boolean = false;
  @Input() bookInfo: Book | undefined = undefined;

  reviewInfo: any;

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    if (this.isExpanded) {
      console.log(this.bookInfo);
      this.reviewInfo = this.bookInfo;
    }
  }
}
