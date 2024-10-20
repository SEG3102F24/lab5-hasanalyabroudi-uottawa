import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';

import { routes } from './app.routes';

const firebaseConfig = {
  apiKey: "AIzaSyAfczyFvXoqw-s7Wbja2DNK1vIQFjzyZMg",
  authDomain: "lab5-hasanalyabroudi-uottawa.firebaseapp.com",
  projectId: "lab5-hasanalyabroudi-uottawa",
  storageBucket: "lab5-hasanalyabroudi-uottawa.appspot.com",
  messagingSenderId: "911010380179",
  appId: "1:911010380179:web:f2fbf22eb83605412d5066",
  measurementId: "G-L2XF63Y9Y5"
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideFirestore(() => getFirestore())
  ]
};
