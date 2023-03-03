import {Directive, ElementRef, HostListener, inject, Input} from '@angular/core';

@Directive({
  selector: '[appHighlightBorder]',
  standalone: true,
})
export class HighlightBorderDirective {
  @Input() borderColor = 'green';
  @Input() selectedBorderColor = 'green';

  elementRef = inject(ElementRef);

  @HostListener('mouseenter') onMouseEnter() {
    this.setColor();
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.elementRef.nativeElement.classList.remove('hover-border');
  }

  @HostListener('click') onMouseClick() {
    this.setColor();
  }

  private setColor(): void {
    const color = this.elementRef.nativeElement.classList.contains('selected-active')
      ? this.selectedBorderColor
      : this.borderColor;

    if (!this.elementRef.nativeElement.classList.contains('hover-border')) {
      this.elementRef.nativeElement.classList.add('hover-border');
    }

    this.elementRef.nativeElement.style.setProperty('--hover-border-color', color);
  }
}
