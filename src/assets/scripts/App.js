import Firebase from './Firebase.js';
import AuthorizationPage from './AuthorizationPageCreation.js';

const firebaseConfig = {
  apiKey: 'AIzaSyB1IcbVVCqWFMAOoFpt8K19T63RsKTXHoI',
  authDomain: 'gratisclonewars.firebaseapp.com',
  databaseURL: 'https://gratisclonewars-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'gratisclonewars',
  storageBucket: 'gratisclonewars.appspot.com',
  messagingSenderId: '1085006089053',
  appId: '1:1085006089053:web:c2224f43e082b9475736b4'
};

const headerSection = document.querySelector('header');
const mainSection = document.querySelector('main');
const logo = document.querySelector('.logo');

export default class App {
  constructor() {
    this.firebase = new Firebase(firebaseConfig, true);
    this.authorizationPage = new AuthorizationPage(this.firebase, headerSection, mainSection, logo);
  }

  init() {
    // this.authorizationPage.createAuthorizationPage();
    this.authorizationPage.start();
  }
}
