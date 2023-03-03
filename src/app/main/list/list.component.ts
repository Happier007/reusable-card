import {NgTemplateOutlet, AsyncPipe, NgForOf, NgIf} from '@angular/common';
import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatRippleModule} from '@angular/material/core';
import {MatIconModule} from '@angular/material/icon';
import {CollapseDirective} from '../../common/directives/collapse.directive';
import {ECollapseLabel} from '../../common/enums/collapse-label.enum';

import {rotateAnimation} from '../../core/animations/rotate.animations';
import {showHideAnimation} from '../../core/animations/show-hide.animations';
import {CardsApiService} from '../../core/api/cards.api';
import {CardComponent} from '../card/card.component';

@Component({
  selector: 'app-list',
  standalone: true,
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  imports: [
    NgTemplateOutlet,
    AsyncPipe,
    NgForOf,
    NgIf,
    MatButtonModule,
    MatIconModule,
    MatRippleModule,
    CardComponent,
    CollapseDirective,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [CardsApiService],
  animations: [rotateAnimation, showHideAnimation],
})
export class ListComponent {
  cardsApi = inject(CardsApiService);

  cars$ = this.cardsApi.cars();
  autoParts$ = this.cardsApi.autoParts();
  collapseLabel = ECollapseLabel;
  state = false;

  onChangeState(e: Event): void {
    e.stopPropagation();
    this.state ? this.state = false : this.state = true;
  }

  onMoreAbout(e: Event): void {
    e.stopPropagation();
    console.log('more about');
  }

  onAction(e: Event, id: number): void {
    e.stopPropagation();
    console.log(id);
  }
}
