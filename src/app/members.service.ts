import { Member } from './member.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MembersService {
  private members: Member[] = [
    new Member('Deaconess Mary', 'Music Minister & Worship Leader '),
    new Member('Pastor Seyi Emmanuel', 'Music Director'),
    new Member('Pastor Seyi Emmanuel', 'Music Director'),
    new Member('Pastor Seyi Emmanuel', 'Music Director'),
    new Member('Pastor Seyi Emmanuel', 'Music Director'),
    new Member('Pastor Seyi Emmanuel', 'Music Director'),
    new Member('Pastor Seyi Emmanuel', 'Music Director'),
    new Member('Pastor Seyi Emmanuel', 'Music Director'),
    new Member('Pastor Seyi Emmanuel', 'Music Director'),
    new Member('Pastor Seyi Emmanuel', 'Music Director'),
    new Member('Pastor Seyi Emmanuel', 'Music Director'),
    new Member('Pastor Seyi Emmanuel', 'Music Director'),
    new Member('Pastor Seyi Emmanuel', 'Music Director'),
    new Member('Pastor Seyi Emmanuel', 'Music Director'),
    new Member('Pastor Seyi Emmanuel', 'Music Director'),
  ];

  constructor() { }
}
