import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-button',
  templateUrl: './search-button.component.html',
  styleUrls: ['./search-button.component.css'],
})
export class SearchButtonComponent implements OnInit {
  @Output() onButtonClick = new EventEmitter();
  @Input() title: string = 'Search';

  constructor() {}

  ngOnInit(): void {}

  onClick() {
    this.onButtonClick.emit();
  }
}
