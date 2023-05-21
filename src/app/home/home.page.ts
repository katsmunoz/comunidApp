import { Component, Inject } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Product } from '../models/product';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  products: Product[] = [];

  constructor(private apiService: ApiService) {}

  ionViewDidEnter() {
    this.apiService.getProducts().subscribe((response: Product[]) => {
      this.products = response;
    });
  }
}
