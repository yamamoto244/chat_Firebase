import { Pipe, PipeTransform } from '@angular/core';
import { format } from 'date-fns';
import * as ja from 'date-fns/locale/ja';

@Pipe({
  name: 'commentDate'
})
export class CommentDatePipe implements PipeTransform {

  transform(date: string): string {
    return format(date, 'MMMDo H:mm', { locale: ja });
  }

}
