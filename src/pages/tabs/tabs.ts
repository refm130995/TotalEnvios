import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tab1Root: any = 'HomePage';
  tab2Root: any = 'PromotionsPage';
  tab3Root: any = 'CalculatorPage';
  tab4Root: any = 'ContactPage';

  tab1Title = " ";
  tab2Title = " ";
  tab3Title = " ";
  tab4Title = " ";

  constructor(public navCtrl: NavController, public translateService: TranslateService) {
    translateService.get(['TAB1_TITLE', 'TAB2_TITLE', 'TAB3_TITLE']).subscribe(values => {
      this.tab1Title = 'Inicio';
      this.tab2Title = 'Promociones';
      this.tab3Title = 'Calculadora';
      this.tab4Title = 'Contacto';
    });
  }
}
