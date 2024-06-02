import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })

  export class ToggleExplorerService {
    public toggleExplorerSubject = new Subject<void>();
    toggleExplorer$ = this.toggleExplorerSubject.asObservable();
  
    toggleExplorer() {
      this.toggleExplorerSubject.next();
    }
  }

//   export class ToggleSidebar2 {
//     private toggleSidebar2Subject = new Subject<void>();
//     toggleSidebar2$ = this.toggleSidebar2Subject.asObservable();
  
//     toggleSidebar2() {
//       this.toggleSidebar2Subject.next();
//     }
//   }