import { Pipe, PipeTransform, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'safeHtml'
})
export class SafeHtmlPipe implements PipeTransform {

  constructor(private _sanitizer: DomSanitizer){}

  transform(value: string) {
    return this._sanitizer.bypassSecurityTrustHtml(value);
  }

}
