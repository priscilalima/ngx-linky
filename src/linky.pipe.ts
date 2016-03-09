import {Pipe, PipeTransform} from 'angular2/core';

@Pipe({name: 'linky'})
export class LinkyPipe implements PipeTransform {
  transform(value:string): string {
    return value;
  }
}