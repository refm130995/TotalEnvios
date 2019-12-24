import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { country, COMMONPRODUCTS, state } from "../../constant/constant";

@IonicPage()
@Component({
  selector: 'page-calculator',
  templateUrl: 'calculator.html',
})
export class CalculatorPage {
  country: any = country;
  states = state;
  comon = COMMONPRODUCTS;
  data:any = [];
  type:any = [];
  unity:any;
  name: any;
  security: boolean = false;
  tarifa: any = 5;
  pv: number;
  pc: number;
  total: number;
  temp: any = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CalculatorPage');
  }


    search(){
        let alert = this.alertCtrl.create();
        alert.setTitle('Busqueda Rapida');
        for (var i in this.comon) {
         alert.addInput({
                type: 'radio',
                label: this.comon[i].box,
                value: i
              }); 
        }
        alert.addButton({
          text: 'Listo',
          handler: data => {
            if(data){
              this.type = this.comon[data];
              console.log(this.redondear(this.type.LIB, 0));
              this.data.kg = ( this.redondear(this.type.LIB, 0) * 0.453592);
              this.data.LIB = this.redondear(this.type.LIB, 0);
              this.data.W = (this.type.W * 2.54);
              this.data.H = (this.type.H * 2.54);
              this.data.L = (this.type.L * 2.54);
              this.temp.W = this.type.W;
              this.temp.W = this.type.H;
              this.temp.W = this.type.L;
              this.name = this.type.name;
            }
          }
        });
        alert.addButton('Cancelar');
        alert.present();
    }
    search2(){
      let alert = this.alertCtrl.create();
      alert.setTitle('Paises');
      for (var i in this.country) {
       alert.addInput({
              type: 'radio',
              label: this.country[i].name,
              value: i
            }); 
      }
      alert.addButton({
        text: 'Listo',
        handler: data => {
          if(data){
            this.data.country = this.country[data].name;
           /*  this.type.kg = this.type.LIB * 0,453592;
            this.name = this.type.name; */
          }
        }
      });
      alert.addButton('Cancelar');
      alert.present();
    }

    search3(){
      console.log(this.states);
      let alert = this.alertCtrl.create();
      alert.setTitle('Estados');
      for (var i in this.states) {
       alert.addInput({
              type: 'radio',
              label: this.states[i].name,
              value: i
            }); 
      }
      alert.addButton({
        text: 'Listo',
        handler: data => {
          if(data){
            this.data.states = this.states[data].name;
           /*  this.type.kg = this.type.LIB * 0,453592;
            this.name = this.type.name; */
          }
        }
      });
      alert.addButton('Cancelar');
      alert.present();
    }

    secure_(){
      console.log(this.security);
      if (this.security) {
        let alert = this.alertCtrl.create({
          title: 'Alerta',
          subTitle: 'Agregar seguro tiene un costo adicional del 5% del articulo.',
          buttons: ['Okey']
        });
        alert.present();
      }
    }

     redondear(numero, digito:number=2){
      let base = Math.pow(10, digito);
      let entero = Math.round(numero * base);
      return entero / base;
  }

  calculate(){
    this.pv = 0;
    this.pc = 0;
    this.total = 0;
    this.temp.W = this.data.W / 2.54;
    this.temp.H = this.data.H / 2.54;
    this.temp.L = this.data.L / 2.54;
    if(this.unity == 'Imperial'){
      console.log(this.total);
      if(this.data.send == 'A'){
      this.pv = (this.type.W * this.type.H * this.type.L)/166;
      console.log(this.pv);
      if(this.pv > this.type.LIB){
         this.total = this.pv*this.tarifa;
         console.log(this.total);
         this.total = this.total+this.total*0.04;
         console.log(this.total);
        if(this.security){
          this.total = this.total+(this.data.price*0.05);
          console.log(this.total);
        }
      }else{
        this.total = this.type.LIB*this.tarifa;
        console.log(this.total);
        console.log(0.04);
        
        this.total = this.total+this.total*0.04;
        console.log(this.total);
        if(this.security){
          this.total = this.total+(this.data.price*0.05);
          console.log(this.total);
        }
      }
    }else{
      this.pc = (this.type.W * this.type.H * this.type.L)/1728;
      console.log(this.pc);
      this.total = this.pc*this.tarifa;
      console.log(this.total);
      this.total = this.total+this.total*0.04;
      console.log(this.total);
      if(this.security){
        this.total = this.total+(this.data.price*0.05);
        console.log(this.total);
      }
    }
    }else{
      if(this.data.send == 'A'){
        console.log(this.total);
        this.pv = ((this.data.W/2.54) * (this.data.H/2.54) * (this.data.L/2.54))/166;
        if(this.pv >= this.data.LIB){
          this.total = this.pv*this.tarifa;
          console.log(this.total);
          this.total = this.total+this.total*0.04;
          if(this.security){
            this.total = this.total+(this.data.price*0.05);
            console.log(this.total);

          }
        }else{
          this.total = this.data.LIB*this.tarifa;
          console.log(this.total);
          this.total = this.total+this.total*0.04;
          console.log(this.total);
          if(this.security){
            this.total = this.total+(this.data.price*0.05);
          }
        }
      }else{
      this.pv = (this.type.W * this.type.H * this.type.L)/1728;
      this.total = this.pv*this.tarifa;
      this.total = this.total+this.total*0.04;
      if(this.security){
      this.total = this.total+(this.data.price*0.05);
      }
      }
    }
    if (this.data.country == 'Colombia') {
      if(this.total < 200) {
        this.total = this.total+this.total*0.12;
      }else{
        this.total = this.total+this.total*0.38;
      }
      this.alert();
    }else{
      this.alert();
    }
  }

  alert(){
    let alert = this.alertCtrl.create({
      title: 'Alerta',
      subTitle: 'El envio tendra un costo aproximado de ' + this.redondear(this.total) + "$",
      buttons: ['Okey']
    });
    alert.present();
  }
}
