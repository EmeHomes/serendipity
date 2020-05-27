import { Component, OnInit } from '@angular/core';
import {UserModel} from '../../../models/user.model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ProfileService} from '../../../services/profile.service';
import {ActivatedRoute, Router} from '@angular/router';
import {RoleModel} from "../../../models/role.model";
import {RoleService} from "../../../services/role.service";

@Component({
  selector: 'app-edit-user-page',
  templateUrl: './edit-user-page.component.html',
  styleUrls: ['./edit-user-page.component.css']
})
export class EditUserPageComponent implements OnInit {

  userId;
  profile: UserModel;
  userForm: FormGroup;
  roles: RoleModel[];

  constructor(
    private profileService: ProfileService,
    private router: Router,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private roleService: RoleService) { }


  ngOnInit(): void {

    this.getRoles();

    this.userId = this.route.snapshot.paramMap.get('userId');

    this.userForm  =  this.formBuilder.group({
      name: ['', Validators.required],
      surname1: ['', Validators.required],
      surname2: ['', Validators.required],
      mail: ['', Validators.required],
      role_id: ['', Validators.required],
      password: [''],
      image: ['']
    });

    this.profileService.find(this.userId).subscribe(res => {
      this.profile = res;
      this.userForm.get('name').patchValue(res.name);
      this.userForm.get('surname1').patchValue(res.surname1);
      this.userForm.get('surname2').patchValue(res.surname2);
      this.userForm.get('mail').patchValue(res.mail);
      this.userForm.get('password').patchValue(res.password);
      this.userForm.get('image').patchValue(res.image);
      this.userForm.get('role_id').patchValue(res.role.id);
    });
  }

  save() {
    this.profileService.save(this.userForm, this.profile.id).subscribe(profile => alert('guardada o no'));
  }

  getRoles() {
    this.roleService.findAll().subscribe(res => this.roles = res);
  }
}
