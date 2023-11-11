import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SideNavComponent } from './side-nav/side-nav.component';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'layout-main',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    // Material
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    // Layout
    SideNavComponent
  ],
  templateUrl: './layout-main.component.html',
  styleUrl: './layout-main.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LayoutMainComponent {

  sideOpened = signal<boolean>(true);

  toggleSide(): void{
    this.sideOpened.update(v => !v);
  }

}
