import { Observable } from 'rxjs';
import { MembersService } from './../members.service';
import { Member } from './../member.model';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AdminComponent implements OnInit {
  members: Member[];
  index;
  member = new Member();

  memberForm: FormGroup;


  constructor(private mService: MembersService,
  private router: Router,
  private route: ActivatedRoute
  ) { }

  onSubmit() {
  this.mService.addMember(this.member).subscribe(data =>
     this.members = data,
    err => console.log(err),


  );
  console.log(this.member);
  }
  getpayload() {
    // let payload = Object.assign({}, this.member);
    // payload.
  }




  ngOnInit() {
    this.mService.memberChanged
    .subscribe(
      (members: Member[]) => {
        this.members = members;
      }
    );
    this.mService.getMember()
    .subscribe(
      data => this.members = data,
      err => console.log(err),
      () => console.log('member')

    );
    this.initForm();

  }

  private initForm() {

    this.memberForm = new FormGroup({
      name: new FormControl(),
      description : new FormControl()
    });
  }

  onDeleteMember(index: Member) {
    if (index !== null) {
      console.log('jg');
      this.mService.deleteMember(index.id).subscribe(
        data => this.members = data,

      );
    }


// for (let i = 0; i <= this.members.length; i++) {
// if (index === this.members[i]) {
//   this.mService.deleteMember(i);
//  }
// }

  }

  onCancel() {
    // cancel linked to cancel button to take page to home
    this.router.navigate(['../'], {relativeTo: this.route});
  }


}
