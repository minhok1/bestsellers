import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private isSearchActive: boolean = false;
  private subject = new Subject<boolean>();
  constructor() {}

  toggleSearch() {
    this.isSearchActive = !this.isSearchActive;
    this.subject.next(this.isSearchActive);
  }

  onToggle(): Observable<boolean> {
    return this.subject.asObservable();
  }
}
