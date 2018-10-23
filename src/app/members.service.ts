import { Member } from './member.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MembersService {
  memberChanged = new Subject<Member[]>();
  private members: Member[] = [
    new Member('Deaconess Mary', 'Music Minister & Worship Leader '),
    new Member('Pastor Bola', 'Music Director'),
    new Member('Pastor Mama', 'Music Director'),
    new Member('Pastor Seyi Emmanuel', 'Music Director'),
    new Member('Pastor Seyi Emmanuel', 'Music Director'),
    new Member('Pastor Seyi Emmanuel', 'Music Director'),
    new Member('Pastor Seyi Emmanuel', 'Music Director'),
    new Member('Pastor Dennis', 'Music Director'),
    new Member('Pastor Seyi Emmanuel', 'Music Director'),
    new Member('Pastor Seyi Emmanuel', 'Music Director'),
    new Member('Pastor Seyi Emmanuel', 'Music Director'),
    new Member('Pastor Seyi Emmanuel', 'Music Director'),
    new Member('Pastor Seyi Emmanuel', 'Music Director'),
    new Member('Pastor MasterChief', 'Music Director'),
    new Member('Pastor Seyi Emmanuel', 'Music Director'),
  ];



  constructor() { }

  getMember() {
    return this.members.slice();
  }

addMember(member: Member) {
  this.members.push(member);
  this.memberChanged.next(this.members.slice());

}

deleteMember(index: number) {

  this.members.splice(index, 1);
  this.memberChanged.next(this.members.slice());

}

}
