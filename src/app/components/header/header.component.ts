import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../services/search.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  isSearchActive: boolean = false;
  subscription: Subscription | undefined = undefined;

  constructor(private searchService: SearchService) {
    this.subscription = this.searchService
      .onToggle()
      .subscribe((value) => (this.isSearchActive = value));
  }

  ngOnInit(): void {}

  toggleSearch() {
    this.searchService.toggleSearch();
  }
}
