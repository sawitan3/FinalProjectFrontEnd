import { Component, OnInit } from '@angular/core';
import {CrudService} from '../../services/crud.service';
import {MessageService} from '../../services/message.service';

@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.css']
})
export class UserPanelComponent implements OnInit {
  public msg: any = {};
  public orders: any = [];
  public addresses: any = [];
  public detailOrders: any = [];
  public model: any = {};
  public data: any = {};

  constructor(
    private crud: CrudService,
    private message: MessageService
  ) { }

  ngOnInit() {
    this.crud.load('/api/user/statusLastTrans').subscribe(res => {
      this.orders = res;
    }, err => {
      this.msg = err;
    });
    this.crud.load('/api/user/profile').subscribe(res => {
      this.addresses = res['address'];
      this.model = res;
    }, err => {
      this.msg = err;
    });
  }

  changeProfile(){
    this.crud.update('/api/user/updateProfile', this.model).subscribe(res=>{
        this.message.sendMessage('alert-success', res);
    }, err=>{
        this.message.sendMessage('alert-danger', err.error);
    });
  }

  changePassword(){
    if(this.data.pass == this.data.repass){
        this.crud.update('/api/user/updatePassword',this.data).subscribe(res=>{
            this.message.sendMessage('alert-success', res);
        },err=>{
            this.message.sendMessage('alert-danger', err.error);
        });
    }
  }

  detailTransaction(id: any){
    this.crud.load(`/api/user/detailHead?id=${id}`).subscribe(res=>{
      this.detailOrders = res;
    },err=>{
        this.message.sendMessage('alert-danger',err);
    });
  }
}
