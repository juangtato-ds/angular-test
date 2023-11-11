import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { MatTooltipModule } from '@angular/material/tooltip';
import { SideNavConfig } from '../api/side-nav.config';

@Component({
  selector: 'layout-side-nav',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,

    MatIconModule,
    MatListModule,
    MatTooltipModule
  ],
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SideNavComponent {

  @Input() isExpanded!: boolean;

  // TODO should be configurable by DI
  config: SideNavConfig = {
    items: [
      {
        type: 'link',
        label: 'Home',
        link: '/home',
        icon: 'home'
      },
      {
        type: 'title',
        label: 'Main'
      },
      {
        type: 'link',
        label: 'Position',
        link: '/position',
        icon: 'bar_chart'
      },
      {
        type: 'link',
        label: 'Overall',
        link: '/overall',
        icon: 'monitoring'
      }

    ]
  }

}
