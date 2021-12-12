// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  API_URL: 'http://localhost:8000/api/',
  firebaseConfig : {
    apiKey: "AIzaSyDSaPgeKU8oOWSnYo9jDlwCwpCCd0wV4uE",
    authDomain: "ethereal-runway-269214.firebaseapp.com",
    databaseURL: "https://ethereal-runway-269214-default-rtdb.firebaseio.com/",
    projectId: "ethereal-runway-269214",
    storageBucket: "ethereal-runway-269214.appspot.com",
    messagingSenderId: "270282868146",
    appId: "1:270282868146:web:b9cfb64ba97b2bfa28d0ab",
    measurementId: "${config.measurementId}"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
