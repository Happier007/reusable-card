import {DOCUMENT} from '@angular/common';
import {Directive, ElementRef, HostListener, inject} from '@angular/core';

@Directive({
  selector: '[appSelectItem]',
  standalone: true,
})
export class SelectItemDirective {
  elementRef = inject(ElementRef);
  documentRef = inject(DOCUMENT);

  @HostListener('click') onClickItem() {
    debugger
    this.elementRef.nativeElement.classList.contains('selected-active')
      ? this.elementRef.nativeElement.classList.remove('selected-active')
      : this.selectItem();
  };

  selectItem(): void {
    const selectedItems = this.documentRef.querySelectorAll('.selected-active');

    selectedItems.forEach(item => {
      item.classList.remove('selected-active');
    });

    this.elementRef.nativeElement.classList.add('selected-active');
  }
}
