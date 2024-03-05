import { Injectable, OnInit } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { setCookie, getCookie } from "./cookieConsent";

@Injectable({
  providedIn: "root",
})
export class CookieConsentService  {
  consentChangedSubject = new Subject<boolean>();

  consentChanged(): Observable<boolean> {
    return this.consentChangedSubject.asObservable();
  }
  checkConsent() {    
    getCookie('consent') == true
      ? this.consentChangedSubject.next(true)
      : this.consentChangedSubject.next(false);
  }
  setConsent(name: string, value: boolean, days: number ){
    setCookie(name,value,days);
    this.consentChangedSubject.next(true);
  }
}
