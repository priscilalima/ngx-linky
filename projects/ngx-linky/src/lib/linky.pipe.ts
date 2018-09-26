import { Pipe, PipeTransform } from '@angular/core';
import { link } from 'autolinker';

@Pipe({ name: 'linky' })
export class LinkyPipe implements PipeTransform {
  transform(value: string, options?: any): string {
    return link(value, options);
  }
}
