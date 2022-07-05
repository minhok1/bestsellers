import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  isSearchActive: boolean = false;
  subscription = new Subscription();
  searchTime = '';
  searchType = '';

  constructor(private searchService: SearchService) {
    this.subscription = this.searchService
      .onToggle()
      .subscribe((value) => (this.isSearchActive = value));
  }

  ngOnInit(): void {}

  onSearchSubmit() {
    this.searchService.makeListSearch(this.searchTime, this.searchType);
  }
}
