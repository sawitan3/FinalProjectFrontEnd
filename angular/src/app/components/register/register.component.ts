import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public model: any = {};
  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

  register(){
    this.auth.register(this.model);
  }

}
