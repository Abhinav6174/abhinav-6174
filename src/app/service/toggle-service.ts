import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ToggleExplorerService {
  public toggleExplorerSubject = new Subject<void>();
  toggleExplorer$ = this.toggleExplorerSubject.asObservable();

  toggleExplorer() {
    this.toggleExplorerSubject.next();
  }
}