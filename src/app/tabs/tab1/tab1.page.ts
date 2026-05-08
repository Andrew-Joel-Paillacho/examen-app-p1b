import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton], 
})

export class Tab1Page {
  constructor(private alertController: AlertController) {}

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Advertencia',
      message: 'Este es un mensaje de advertencia.',
      buttons: ['OK']
    });

    await alert.present();
  }
}
