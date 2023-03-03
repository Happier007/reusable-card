import {
  AfterViewInit,
  ContentChild,
  Directive,
  ElementRef,
  inject,
} from '@angular/core';
import {fromEvent, Subject, takeUntil} from 'rxjs';

import {ECollapseLabel} from '../enums/collapse-label.enum';

@Directive({
  selector: '[appCollapse]',
  standalone: true,
})
export class CollapseDirective implements AfterViewInit {
  @ContentChild('collapseBtn')
  private collapseBtn: ElementRef | undefined;

  @ContentChild('collapseBlock')
  private collapseBlock: ElementRef | undefined;

  private elementRef = inject(ElementRef);

  private _destroyed$ = new Subject<void>();

  public ngAfterViewInit(): void {
    this.subCollapse();
  }

  subCollapse(): void {
    fromEvent(this.collapseBtn?.nativeElement, 'click')
      .pipe(takeUntil(this._destroyed$))
      .subscribe(() => this.toggleBtn());
  }

  private toggleBtn(): void {
    this.elementRef.nativeElement.querySelector('.collapsed-arrow').classList.toggle('rotate-180');
    this.collapseBlock?.nativeElement.classList.toggle('show-block');
    (this.collapseBtn as ElementRef).nativeElement.querySelector('.collapse-name_btn').innerHTML = this.setBtnLabel();
  }

  private setBtnLabel(): string {
    const isBlockOpened = this.collapseBlock?.nativeElement.classList.contains('show-block');
    return isBlockOpened ? ECollapseLabel.OPENED : ECollapseLabel.CLOSED
  }
}
