import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyDW4TUGCvgLuqtmRmaKv4cTyFIG8YPhWLc',
  authDomain: 'maispeixes-83be7.firebaseapp.com',
  databaseURL: 'https://maispeixes-83be7.firebaseio.com',
  projectId: 'maispeixes-83be7',
  storageBucket: 'maispeixes-83be7.appspot.com',
  messagingSenderId: '242059887370',
  appId: '1:242059887370:web:00ed0de84fead378'
};

const firebaseInit = firebase.initializeApp(config);

export default firebaseInit;
