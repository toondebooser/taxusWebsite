import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { AtelierComponent } from "./atelier/atelier.component";
import { VellenComponent } from "./vellen/vellen.component";
import { SnoeienComponent } from "./snoeien/snoeien.component";
import { ContactComponent } from "./contact/contact.component";
import { DeBeverComponent } from "./de-bever/de-bever.component";
import { StandplaatsVerbeteringComponent } from "./standplaats-verbetering/standplaats-verbetering.component";
import { VtaComponent } from "./vta/vta.component";

export const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    title: "Taxus",
  },
  {
    path: "atelier",
    component: AtelierComponent,
    title: "Atelier",
  },
  {
    path: "vellen",
    component: VellenComponent,
    title: "Vellen",
  },
  {
    path: "snoeien",
    component: SnoeienComponent,
    title: "Snoeien",
  },
  {
    path: "contact",
    component: ContactComponent,
    title: "Contact",
  },
  {
    path: "debever",
    component: DeBeverComponent,
    title: "deBever"
  },
  {
    path: "standplaats",
    component: StandplaatsVerbeteringComponent,
    title: "standplaats"
  },
  {
    path: "vta",
    component: VtaComponent,
    title: "vta"
  }
];
