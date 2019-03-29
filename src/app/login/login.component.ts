import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SignUpComponent } from '../sign-up/sign-up.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  constructor(public modalCtrl: ModalController) { }

  ngOnInit() {}

  async onRegisterClicked() {
    const updatePage = await this.modalCtrl.create({
      component: SignUpComponent,
      // componentProps: undefined,
      // showBackdrop: false,
      // backdropDismiss: false,
    });
    return await updatePage.present();
  }

}
