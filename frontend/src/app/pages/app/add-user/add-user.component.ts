import { Component, OnInit } from '@angular/core';
import {UserModel} from '../../../models/user.model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ProfileService} from '../../../services/profile.service';
import {ActivatedRoute, Router} from '@angular/router';
import {StatusService} from "../../../services/status.service";
import {RoleService} from "../../../services/role.service";
import {RoleModel} from "../../../models/role.model";

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  profile: UserModel;
  userForm: FormGroup;
  userId;
  roles: RoleModel[];
  errorMessage;
  successMessage;

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
      role_id : ['', Validators.required],
      username : ['', Validators.required],
      name: ['', Validators.required],
      surname1: ['', Validators.required],
      surname2: ['', Validators.required],
      mail: ['', Validators.required],
      password: ['', Validators.required],
      image: [''],
    });
  }

  save() {
    if (this.userForm.invalid) {
      this.errorMessage = 'Debes rellenar todos los campos para continuar';
      return;
    }
    this.profileService.new(this.userForm).subscribe(res => {
      if (1 === res) {
        this.successMessage = 'El usuario ha sido creado con exito';
        this.userForm.reset();
      } else {
        this.errorMessage = 'Ha ocurrido un error, inténtelo más tarde';
      }
    });
  }

  getRoles() {
    this.roleService.findAll().subscribe(res => this.roles = res);
  }

}
