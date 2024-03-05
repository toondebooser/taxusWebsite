import { Component, OnDestroy, OnInit, inject } from "@angular/core";
import { setCookie, getCookie } from "./cookieConsent";
import { RouterLink, RouterOutlet, RouterLinkActive } from "@angular/router";
import { CookieConsentService } from "./cookie-consent.service";
import { Subscription } from "rxjs";
import { ConsentService } from "./consent.service";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent implements OnInit, OnDestroy {
  cookieConsentService = inject(CookieConsentService);
  consentService = inject(ConsentService);
  serviceSubscription: Subscription | undefined;

  ngOnInit(): void {
    this.serviceSubscription = this.cookieConsentService
      .consentChanged()
      .subscribe((state) => {
        console.log(state);

        this.consentService.consentSig.set(state);
      });
    this.cookieConsentService.checkConsent();
  }

  ngOnDestroy(): void {
    if (this.serviceSubscription) this.serviceSubscription.unsubscribe;
  }
}
