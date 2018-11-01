import { Member } from './../member.model';
import { Component, OnInit } from '@angular/core';
import { MembersService } from '../members.service';
import {Observable} from 'RxJs';


@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {
  searchTerm: string;
members: Member[];
  constructor(private mService: MembersService) { }

  ngOnInit() {
    this.mService.memberChanged
    .subscribe(
      (members: Member[]) => {
        this.members = members;
      }
    );

    this.mService.getMember().subscribe(
      data => this.members = data,
      err => console.log(err),

    );


  }

}
