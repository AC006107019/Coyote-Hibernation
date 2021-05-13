import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import firebase from "firebase";
import { Provider } from "react-redux";
import store from "./store";
import "../node_modules/font-awesome/css/font-awesome.min.css";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  // apiKey: "AIzaSyCbou74sw_hPCqli_9Vhf4Hi2xGVQ_4pBs",
  // authDomain: "coyote-hibernation-c4914.firebaseapp.com",
  // projectId: "coyote-hibernation-c4914",
  // storageBucket: "coyote-hibernation-c4914.appspot.com",
  // messagingSenderId: "320339060221",
  // appId: "1:320339060221:web:b4478ee199aacfc6a16594",
  // measurementId: "G-67X2CDFZQY",

  // New account credentials
  // apiKey: "AIzaSyCXkCo-Ap7j9jDhboxuh4xuu3AxYavPe8s",
  // authDomain: "coyote-hibernation-master.firebaseapp.com",
  // // databaseURL: "https://coyote-hibernation-master-default-rtdb.firebaseio.com",
  // projectId: "coyote-hibernation-master",
  // storageBucket: "coyote-hibernation-master.appspot.com",
  // messagingSenderId: "1032499016402",
  // appId: "1:1032499016402:web:8e454e63d04b335729330b",
  // measurementId: "G-XH806HHG15",
  apiKey: "AIzaSyCvtcVPa8U-cZiGvN2L8p2rL6lCDo1lKDs",
  authDomain: "project-coyote-hibernation.firebaseapp.com",
  databaseURL: "https://project-coyote-hibernation-default-rtdb.firebaseio.com",
  projectId: "project-coyote-hibernation",
  storageBucket: "project-coyote-hibernation.appspot.com",
  messagingSenderId: "12254491398",
  appId: "1:12254491398:web:8f4f03b763fbdefd0b2487",
  measurementId: "G-76KJEWEXEF",
};

firebase.initializeApp(firebaseConfig);
export const firestore = firebase.firestore();

window.store = store;

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
