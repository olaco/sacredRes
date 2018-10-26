import { MembersService } from './../members.service';
import { Member } from './../member.model';
import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  members: Member[];
  index;

  memberForm: FormGroup;


  constructor(private mService: MembersService,
  private router: Router,
  private route: ActivatedRoute
  ) { }

  onSubmit() {
  this.mService.addMember(this.memberForm.value);
  console.log(this.memberForm);
  }




  ngOnInit() {
    this.mService.memberChanged
    .subscribe(
      (members: Member[]) => {
        this.members = members;
      }
    );
    this.members = this.mService.getMember();
    this.initForm();

  }

  private initForm() {

    this.memberForm = new FormGroup({
      name: new FormControl(),
      description : new FormControl()
    });
  }

  onDeleteMember(index) {
  //
for (let i = 0; i <= this.members.length; i++) {
if (index === this.members[i]) {
  this.mService.deleteMember(i);
 }
}

  }

  onCancel() {
    // cancel linked to cancel button to take page to home
    this.router.navigate(['../'], {relativeTo: this.route});
  }


}
