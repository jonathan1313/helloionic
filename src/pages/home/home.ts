import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	public hello: boolean = false;

	//BUTTONS
	myColor: string = 'dark';
	isDanger: boolean = true;
	isRound: boolean = true;
	isClear: boolean = true;

  	constructor(public navCtrl: NavController) {

  	}

  	showHello(): void {
  		this.hello = !this.hello;
  	}

  	onClick(event: MouseEvent): void {
  		console.log(event);
  	}

}
