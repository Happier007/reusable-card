import {ChangeDetectionStrategy, Component, inject, OnInit} from '@angular/core';
import {RouterModule} from '@angular/router';

import {ICONS_SVG, ICONS_SVG_PATH} from './core/constants/icons-svg';
import {RegisterSvgService} from './core/services/register-svg.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  template: `<router-outlet></router-outlet>`,
  providers: [RegisterSvgService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  registerSvgService = inject(RegisterSvgService);

  ngOnInit(): void {
    this.registerSvgService.registerSvg(ICONS_SVG, ICONS_SVG_PATH);
  }
}
