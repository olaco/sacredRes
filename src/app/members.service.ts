import { Member } from './member.model';
import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MembersService {
  memberChanged = new Subject<Member[]>();
  private members: Member[] = [
    // new Member('Deaconess Mary', 'Music Minister & Worship Leader '),
    // new Member('Pastor Bola', 'Music Director'),
    // new Member('Pastor Mama', 'Music Director'),
    // new Member('Pastor Seyi Emmanuel', 'Music Director'),
    // new Member('Pastor Seyi Emmanuel', 'Music Director'),
    // new Member('Pastor Seyi Emmanuel', 'Music Director'),
    // new Member('Pastor Seyi Emmanuel', 'Music Director'),
    // new Member('Pastor Dennis', 'Music Director'),
    // new Member('Pastor Seyi Emmanuel', 'Music Director'),
    // new Member('Pastor Seyi Emmanuel', 'Music Director'),
    // new Member('Pastor Seyi Emmanuel', 'Music Director'),
    // new Member('Pastor Seyi Emmanuel', 'Music Director'),
    // new Member('Pastor Seyi Emmanuel', 'Music Director'),
    // new Member('Pastor MasterChief', 'Music Director'),
    // new Member('Pastor Seyi Emmanuel', 'Music Director'),
  ];



  constructor( private http: HttpClient) { }

  getMember(): Observable<Member[]> {
    return this.http.get<Member[]>('http://localhost:4000/members');
    // return this.members.slice();
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
