import { Pipe, PipeTransform } from '@angular/core';
import { Member } from './member.model';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(members: Member[], searchTerm: string): Member[] {
    if (!members || !searchTerm) {
      return members;

    }

    return members.filter(member =>
      member.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
  }

}
