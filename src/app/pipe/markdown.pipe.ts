import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'markdown'
})
export class MarkdownPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    return value?.replace("#", "<p/>");
  }

}
