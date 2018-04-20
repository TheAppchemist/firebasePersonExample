import { Component, ViewChild, NgZone } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HelloComponent } from '../../components/hello/hello';
import { SecondPage } from '../second/second';
import { Geolocation } from '@ionic-native/geolocation';
declare var firebase

class MyModel {

}

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  form: FormGroup
  myModel: {name: String, surname: String}
  @ViewChild('localVar') hello: HelloComponent
  name
  surname
  people
  peopleKeys

  constructor(public navCtrl: NavController, fb: FormBuilder, private geolocation: Geolocation, private zone: NgZone) {
    // firebase.database().ref('names').once('value').then(snapshot => {
    //   this.people = snapshot.val()
    //   this.peopleKeys = Object.keys(this.people)
    //   console.log(snapshot.val())
    //   // this.people = snapshot.val()
    // })

    firebase.database().ref('names').on('value', snapshot => {
      this.zone.run(() => {
        this.people = snapshot.val()
        this.peopleKeys = Object.keys(this.people)
        console.log(snapshot.val())
      })
      
    })
  }

  save() {
    let obj = {name: this.name, surname: this.surname}
    firebase.database().ref('names').push().set(obj).then(() => {
      console.log('Data pushed')
    })
  }

  update(key) {
    this.navCtrl.push(SecondPage, {person: this.people[key], key: key})
  }

}
