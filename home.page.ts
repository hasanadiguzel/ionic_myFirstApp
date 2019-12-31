import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  //değişken tanımlarken değişkenin ismini verip tipini belirtmek yeterlidir...
  ad: string = ''; 
  private soyad: string;

  constructor(public toastController: ToastController, public alertController: AlertController, public router: Router) {}

  /*islem()
  {
    //metod içerisinde değişken tanımlarken let kullanılmalıdır...
    //let ad : string;
    //alert('Merhaba ' + this.ad + ' ' + this.soyad);
    console.log('Merhaba ' + this.ad + ' ' + this.soyad);
  }*/

  async mesajGoster(mesaj) {
    const toast = await this.toastController.create({
      /*message: 'Merhaba ' + this.ad + ' ' + this.soyad,
      duration: 2000
    });
    toast.present();*/

      message: mesaj,
      position: 'top',
      buttons: [
        {
          text: 'Tamam',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    toast.present();
  }

  async uyariGoster() {
    const alert = await this.alertController.create({
      header: 'Uyarı!',
      message: '<strong>213123</strong> nolu kaydı silmek istiyormusunuz!!!',
      buttons: [
        {
          text: 'Vazgeç',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Sil',
          handler: () => {
            this.mesajGoster('Kayıt Silindi.');
          }
        }
      ]
    });

    await alert.present();
  }

  async sablonGoster() {
    const alert = await this.alertController.create({
      header: 'Bilgi Girişi!',
      inputs: [
        {
          name: 'name1',
          type: 'text',
          placeholder: 'Adınızı Giriniz'
        },
        {
          name: 'name2',
          type: 'text',
          id: 'name2-id',
          value: this.soyad,
          placeholder: 'Soyadınızı Giriniz'
        }
      ],
      buttons: [
        {
          text: 'Vazgeç',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Tamam',
          handler: data => {
            this.mesajGoster('Hoşgeldiniz ' + data.name1)
          }
        }
      ]
    });

    await alert.present();
  }

  git()
  {
    this.router.navigate(['/detay', {deger: this.ad}]);
  }

}