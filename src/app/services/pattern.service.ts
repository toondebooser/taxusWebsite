import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class PatternService {
  
  valid = false;

  contactData: any = {
    email: "",
    telefoon: "",
    bericht: "",
  };

  validation: any = {
    email: null,
    telefoon: null,
    bericht: null,
  };

  regexPatterns: any = {
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    bericht: /^[\w\W]+$/,
    telefoon: /^(?:\+?32|0)\d{9}$/,
  };
}
