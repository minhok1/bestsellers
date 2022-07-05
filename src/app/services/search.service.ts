import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private isSearchActive: boolean = false;
  private subject = new Subject<boolean>();
  private listSubject = new Subject<any>();

  constructor() {}

  toggleSearch() {
    if (this.isSearchActive) {
      this.listSubject.next(false);
    }
    this.isSearchActive = !this.isSearchActive;
    this.subject.next(this.isSearchActive);
  }

  onToggle(): Observable<boolean> {
    return this.subject.asObservable();
  }

  makeListSearch(searchTime: string, searchType: string) {
    this.listSubject.next([searchTime, searchType]);
    this.isSearchActive = false;
    this.subject.next(this.isSearchActive);
  }

  makeListCurrent() {
    this.listSubject.next(false);
    this.isSearchActive = false;
    this.subject.next(this.isSearchActive);
  }

  onSearchSubmit(): Observable<boolean> {
    return this.listSubject.asObservable();
  }
}
