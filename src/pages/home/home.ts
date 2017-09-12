import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	public hello: boolean = false;

  	constructor(public navCtrl: NavController) {

  	}

  	showHello(): void {
  		this.hello = !this.hello;
  	}

}
