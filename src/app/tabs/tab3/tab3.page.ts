import { Component } from '@angular/core';
// CHANGE: Import the PhotoService
import { PhotoService } from '../../services/photo.service';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: false,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton], 
})
export class Tab3Page {
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
