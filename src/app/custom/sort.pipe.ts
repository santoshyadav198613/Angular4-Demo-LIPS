import { Pipe, PipeTransform } from '@angular/core';
import { Posts } from '../service/post/post';
@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: Posts[], sort: number): any {
    return value.filter((data) => data.id === sort);
  }

}
