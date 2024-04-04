import { ApplicationConfig, importProvidersFrom } from "@angular/core";
import {
  InMemoryScrollingFeature,
  InMemoryScrollingOptions,
  provideRouter,
  withInMemoryScrolling,
} from "@angular/router";
import { routes } from "./app.routes";
import { initializeApp, provideFirebaseApp } from "@angular/fire/app";
import { getFirestore, provideFirestore } from "@angular/fire/firestore";
import { IMAGE_CONFIG } from "@angular/common";

const firebaseConfig = {
  apiKey: "AIzaSyCeI5rf7LHrAlP6puESSdCPMYn80O3gf3M",
  authDomain: "taxuswebsitecontactform.firebaseapp.com",
  projectId: "taxuswebsitecontactform",
  storageBucket: "taxuswebsitecontactform.appspot.com",
  messagingSenderId: "244788000891",
  appId: "1:244788000891:web:087b6116ac6d434f7c4ade",
};


export const appConfig: ApplicationConfig = {
  providers: [
    {
      provide: IMAGE_CONFIG,
      useValue: {
        disableImageSizeWarning: true,
        disableImageLazyLoadWarning: true,
      },
    },
    provideRouter(routes),
    importProvidersFrom([
      provideFirebaseApp(() => initializeApp(firebaseConfig)),
      provideFirestore(() => getFirestore()),
    ]),
  ],
};
