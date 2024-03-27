// import { setCookie, getCookie } from "./cookieConsent";
// import { CookieConsentService } from "./cookie-consent.service";
// import { ConsentService } from "./consent.service";
import { Component, OnDestroy, OnInit, inject } from "@angular/core";
import { RouterLink, RouterOutlet, RouterLinkActive } from "@angular/router";
import { Subscription } from "rxjs";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent implements OnInit {
  // cookieConsentService = inject(CookieConsentService);
  // consentService = inject(ConsentService);
  // serviceSubscription: Subscription | undefined;

  ngOnInit(): void {
    // this.serviceSubscription = this.cookieConsentService
    //   .consentChanged()
    //   .subscribe((state) => {
    //     console.log(state);

    //     this.consentService.consentSig.set(state);
    //   });
    // this.cookieConsentService.checkConsent();
  }}
