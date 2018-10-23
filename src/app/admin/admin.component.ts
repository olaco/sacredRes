import { MembersService } from './../members.service';
import { Member } from './../member.model';
import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  members: Member[];

  memberForm: FormGroup;


  constructor(private mService: MembersService) { }

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




}
