import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  slides = [{
    image: "./assets/imgs/banner1.jpg",
    title:"Envío Aéreo",
    service:"./assets/imgs/aereo.jpg"
  },
  {
    image: "./assets/imgs/banner2.jpg",
    title:"Envío Maritimo",
    service:"./assets/imgs/maritimo.jpg"
  },
  {
    image: "./assets/imgs/banner3.jpg",
    title:"Reempaque",
    service:"./assets/imgs/reempaque.jpg"
  }
];
slides2 = [{
  image: "./assets/imgs/promocion1.jpeg",
  title:"Mitad de precio",
  service:"./assets/imgs/aereo.jpg"
},
{
  image: "./assets/imgs/promocion2.jpeg",
  title:"Mitad de precio2",
  service:"./assets/imgs/maritimo.jpg"
},
{
  image: "./assets/imgs/banner3.jpeg",
  title:"Mitad de precio3",
  service:"./assets/imgs/promocion3.jpg"
}
];
  option: string = "service";
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  goDetail(){
    this.navCtrl.push('ServicesDetailsPage');
  }
}
