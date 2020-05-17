import {Component, Input, OnInit} from '@angular/core';
import {ProfileService} from '../../../services/profile.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserModel} from '../../../models/user.model';


@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})

export class ProfilePageComponent implements OnInit {

  userId;
  profile: UserModel;
  userForm: FormGroup;

  constructor(
    private profileService: ProfileService,
    private router: Router,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute) { }


  ngOnInit(): void {
    this.userId = this.route.snapshot.paramMap.get('userId');

    this.userForm  =  this.formBuilder.group({
      name: ['', Validators.required],
      surname1: ['', Validators.required],
      surname2: ['', Validators.required],
      mail: ['', Validators.required],
      password: [''],
    });

    this.profileService.find(this.userId).subscribe(res => {
      this.profile = res;
      this.userForm.get('name').patchValue(res.name);
      this.userForm.get('surname1').patchValue(res.surname1);
      this.userForm.get('surname2').patchValue(res.surname2);
      this.userForm.get('mail').patchValue(res.mail);
      this.userForm.get('password').patchValue(res.password);
    });
  }

  save() {
    console.log(this.userForm.value);

    this.profileService.save(this.userForm, this.profile.id).subscribe(profile => console.log(profile));
  }

}
