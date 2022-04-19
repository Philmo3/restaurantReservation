import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberToArray',
})
export class NumberToArrayPipe implements PipeTransform {
  transform(lenght: number): number[] {
    const newArr = Array.from({ length: lenght }, (_, value) => value + 1);

    if (newArr.length < lenght) {
      newArr.push(lenght - newArr.length);
    }

    return newArr;
  }
}
