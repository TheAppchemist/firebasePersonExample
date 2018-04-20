import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
declare var firebase

/**
 * Generated class for the SecondPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-second',
  templateUrl: 'second.html',
})
export class SecondPage {
  name
  surname
  key

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    let person = navParams.get('person')
    this.name = person.name
    this.surname = person.surname
    this.key = navParams.get('key')
  }

  ionViewDidLoad() {
    
  }

  save() {
    let obj = {name: this.name, surname: this.surname}
    firebase.database().ref('names/' + this.key).set(obj).then(() => {
      console.log('Data pushed')
    })
  }

}
