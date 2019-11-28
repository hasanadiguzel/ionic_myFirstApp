import {  Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detay',
  templateUrl: './detay.page.html',
  styleUrls: ['./detay.page.scss'],
})
export class DetayPage {

  private gelenVeri: any;

  constructor(public activatedRoute: ActivatedRoute) 
  {
    this.gelenVeri = this.activatedRoute.snapshot.paramMap.get('kullanici');
  }

}
