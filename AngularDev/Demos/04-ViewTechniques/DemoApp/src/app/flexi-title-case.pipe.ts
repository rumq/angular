import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'flexititlecase'
})
export class FlexiTitleCasePipe implements PipeTransform {

  transform(value: string, upperOrLower: string): string {

    if (upperOrLower !== 'upper' && upperOrLower !== 'lower') 
      return value;
    
    let words:string[] = value.split(' ');
    for (var i = 0; i < words.length; i++) {
      if (upperOrLower === 'upper')
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
      else 
        words[i] = words[i].charAt(0).toLowerCase() + words[i].slice(1).toUpperCase();
    }
    return words.join(' ');
  }
}
