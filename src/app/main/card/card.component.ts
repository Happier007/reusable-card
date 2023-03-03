import {ChangeDetectionStrategy, Component} from '@angular/core';

import {HighlightDirective} from '../../common/directives/highlight.directive';
import {HighlightBorderDirective} from '../../common/directives/highlight-border.directive';
import {SelectItemDirective} from '../../common/directives/select-item.directive';

@Component({
  selector: 'app-card',
  standalone: true,
  template: `
    <section
      class="border cursor-pointer position-relative w-100"
      appSelectItem
      appHighlightBorder [borderColor]="'#C4D3E9'" [selectedBorderColor]="'#0089FF'">

      <div class="d-flex p-3">
        <div class="me-3">
          <ng-content select="[slot=iconTmp]"></ng-content>
        </div>

        <div class="w-100">
          <div class="d-flex justify-content-between align-items-baseline">
            <ng-content select="[slot=headerTmp]"></ng-content>
            <ng-content select="[slot=actionTmp]"></ng-content>
          </div>

          <ng-content select="[slot=contentTmp]"></ng-content>
        </div>
      </div>
    </section>
  `,
  imports: [
    SelectItemDirective,
    HighlightDirective,
    HighlightBorderDirective,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {}
