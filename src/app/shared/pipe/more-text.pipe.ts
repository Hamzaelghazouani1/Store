import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'moreText'
})
export class MoreTextPipe implements PipeTransform {

  transform(value: string): string {
    return value.length < 50 ? value : value.substring(0,50) + '...';
  }

}
