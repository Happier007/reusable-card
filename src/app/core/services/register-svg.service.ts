import {inject} from '@angular/core';
import {MatIconRegistry} from '@angular/material/icon';
import {DomSanitizer} from '@angular/platform-browser';

export class RegisterSvgService {
  matIconRegistry = inject(MatIconRegistry);
  domSanitizer = inject(DomSanitizer);

  registerSvg(icons: string[], path: string): void {
    icons.forEach((icon: string) => {
      this.matIconRegistry
        .addSvgIcon(icon, this.domSanitizer.bypassSecurityTrustResourceUrl(`${path}/${icon}.svg`));
    })
  }
}
