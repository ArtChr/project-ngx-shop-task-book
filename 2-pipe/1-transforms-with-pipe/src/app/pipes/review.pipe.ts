import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
  name: 'review',
})
// @ts-ignore
export class ReviewPipe implements PipeTransform {

  public transform(countOfReviews: number | undefined): string {

    if (!countOfReviews) {
      return 'Нет отзывов';
    }

    const countOfReviewsArray = countOfReviews.toString().split('');
    const lastChars = +(countOfReviewsArray[countOfReviewsArray.length - 1]);
    const lastTwoChars = +(countOfReviewsArray[countOfReviewsArray.length - 2] + countOfReviewsArray[countOfReviewsArray.length - 1]);

    if ([11, 12, 13, 14].includes(lastTwoChars)) {
      return `${ countOfReviews } отзывов`;
    }

    if (lastChars === 1) {
      return `${ countOfReviews } отзыв`;
    }

    if ([2, 3, 4].includes(lastChars)) {
      return `${ countOfReviews } отзыва`;
    }

    return `${ countOfReviews } отзывов`;
  }

}
