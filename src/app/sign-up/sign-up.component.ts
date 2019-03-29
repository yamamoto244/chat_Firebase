import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { UserService } from '../core/service/user.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {

  constructor(
      private modalCtrl: ModalController,
      private userService: UserService,
  ) { }

  ngOnInit() {}

  /*  戻るボタンクリックイベント  */
  onBackButtonClicked() {
    this.modalCtrl.dismiss();
  }

  signup(f: NgForm): void {
    this.userService.create(f.value.email, f.value.password);
  }

}
