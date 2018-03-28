import { Component, OnInit } from '@angular/core';
import { AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public model: any = {};
  constructor(private auth: AuthService) { }

    ngOnInit() {
  }

  login() {
    this.auth.login(this.model);
  }
}
