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
  errorMessage;
  successMessage;

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
      image: [''],
      role_id: [''],
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
    if (this.userForm.invalid) {
      this.errorMessage = 'Debes rellenar todos los campos para continuar';
      return;
    }
    this.profileService.save(this.userForm, this.profile.id).subscribe(res => {
      if (1 === res) {
        this.successMessage = 'Los datos han sido actualizados con éxito';
      } else {
        this.errorMessage = 'Ha ocurrido un error, inténtelo más tarde';
      }
    });
  }

}
