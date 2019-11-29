# ionic_myFirstApp

ngmodel = arka planda ki değişkenler ön planda ki textboxu eşleştirir, bir birine bağlar.

two way binding = {{ad}}

ngIf = eğer true ad&&soyad

primary, danger, warning = theme (folder) > variables.scss

button > click = islem() (function - .ts)

scoop {}

metod içerisinde değişken = let ad : any;

autofocus

constructer

cli new page add command: ionic g > page

ionic docs search: navigation > Routing and Navigation - Ionic Documentation

ionic docs search: router > Angular Navigation - Ionic Documentation

routerLink 

this.router.navigate: parametre gönderilebiliyor

this.router.navigate(['/detay', {kullanici: this.ad}]);

Sayfadan veri göndermek için Router, değer almak için ActivatedRoute

this.gelenVeri = this.activatedRoute.snapshot.paramMap.get('kullanici');

cli command;

-ionic start myFirstApp blank

-ionic serve

-ionic g > page
