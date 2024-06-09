import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "./header/header.component";
import { SidebarComponent } from './sidebar/sidebar.component';
import { ExplorerComponent } from './explorer/explorer.component';
import { FooterComponent } from './footer/footer.component';
import { EditorComponent } from "./editor/editor.component";
import { Inject } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [
        CommonModule,
        HeaderComponent,
        SidebarComponent,
        ExplorerComponent,
        EditorComponent,
        FooterComponent
    ]
})
export class AppComponent {

    // constructor(@Inject(APP_BASE_HREF) public baseHref: string) {
        
    // }
}
