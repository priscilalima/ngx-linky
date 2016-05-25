import {Pipe, PipeTransform} from '@angular/core';
import * as Autolinker from 'autolinker';

@Pipe({name: 'linky'})
export class LinkyPipe implements PipeTransform {
  transform(value:string, args?: any[]): string {
    let options = args !== undefined ? args[0] : null;
    return Autolinker.link(value, options);
  }
}