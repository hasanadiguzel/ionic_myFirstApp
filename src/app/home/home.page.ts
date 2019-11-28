import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  private ad: string;
  private parola: string;
  private mesaj: any = false;

  constructor(public toastController: ToastController, public router: Router) {}


  sistemeGiris()
  {
    this.ad == "Admin" && this.parola == "123" ? this.mesaj = true : this.mesaj = false;
    this.mesajGoster(this.mesaj);
  }


  async mesajGoster(durum: any) {
    let mesaj: string = durum ? 'Giriş Başarılı. Yönlendiriliyorsunuz...': 'Hatlı veri girişi yapıldı.';
    const toast = await this.toastController.create({
      message: mesaj,
      duration: 2000
    });
    toast.present();
    if(this.mesaj) this.yonlendir();
  }

  yonlendir()
  {
    this.router.navigate(['/detay', {kullanici: this.ad}]);
  }

}
