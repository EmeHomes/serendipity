import { Component, OnInit } from '@angular/core';
import {UserModel} from '../../../models/user.model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ProfileService} from '../../../services/profile.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  profile: UserModel;
  userForm: FormGroup;
  userId;

  constructor(
    private profileService: ProfileService,
    private router: Router,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.userId = this.route.snapshot.paramMap.get('userId');

    this.userForm  =  this.formBuilder.group({
      role : ['', Validators.required],
      username : ['', Validators.required],
      name: ['', Validators.required],
      surname1: ['', Validators.required],
      surname2: ['', Validators.required],
      mail: ['', Validators.required],
      password: [''],
    });
  }

  save() {
    this.profileService.save(this.userForm, this.profile.id).subscribe(profile => console.log(profile));

  }

}
