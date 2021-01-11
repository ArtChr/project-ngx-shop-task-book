import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rate',
})
// @ts-ignore
export class RatePipe implements PipeTransform {
  public transform(value: number): number | undefined {
    const integerValue = Math.floor(value);
    const fractional = value - integerValue;

    if (fractional < 0.25) {
      return integerValue;
    } else if (fractional < 0.75 && fractional >= 0.25) {
      return integerValue + 0.5;
    }

    return Math.ceil(value);
  }
}
