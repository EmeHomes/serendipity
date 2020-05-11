import { Component, OnInit } from '@angular/core';
import { ProfileService} from '../../../services/profile.service';
import { SessionService } from '../../../services/session.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})

export class ProfilePageComponent implements OnInit {

  profile: [];
  id;

  constructor(private profileService: ProfileService,  private router: Router) { }


  ngOnInit(): void {
    this.profileService.find().subscribe(res => this.profile = res);
  }

  save() {
    this.profileService.save(this.profile).subscribe(profile => this.profile = profile);
  }

}
