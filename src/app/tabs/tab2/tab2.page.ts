import { Component } from '@angular/core';
// CHANGE: Import the PhotoService
import { PhotoService } from '../../services/photo.service';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: false,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton], 
})
export class Tab2Page {
  // CHANGE: Update constructor to include `photoService`
  constructor(public photoService: PhotoService) {}

  // CHANGE: Add call to `loadSaved()` when navigating to the Photos tab
  async ngOnInit() {
    await this.photoService.loadSaved();
  }

  addPhotoToGallery() {
    this.photoService.addNewToGallery();
  }
}