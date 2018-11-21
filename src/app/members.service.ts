import { Member } from './member.model';
import { Injectable } from '@angular/core';
import { Subject, Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

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
  private handleError(error: HttpErrorResponse) {
    console.log(error);
    return throwError('Error! something went wrong');
  }



  constructor( private http: HttpClient) { }

  getMember(): Observable<Member[]> {
    console.log('uio');
    // params: {}
    // const httpparam= this.getHttpParam(params); {params: httpparam}
    return this.http.get<Member[]>('/select.php', httpOptions).pipe(
      map((res) => {
        this.members = res['data'];
        return this.members;
      }),
      catchError(this.handleError));


    // return this.members.slice();
  }

addMember(member: Member): Observable<Member[]> {
  // this.members.push(member);
  // this.memberChanged.next(this.members.slice());
  return this.http.post<Member>('/insert.php', member).pipe(
    map((res) => {
      this.members = res['data'];
      return this.members;
    }),
    catchError(this.handleError));


}

deleteMember(index: number) {

  this.members.splice(index, 1);
  this.memberChanged.next(this.members.slice());

}


}
