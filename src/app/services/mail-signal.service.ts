import { Injectable, signal } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class MailSignalService {
  mailSig = signal<string>("R7vCWMcMjoV7xLgHyeRX");
}
