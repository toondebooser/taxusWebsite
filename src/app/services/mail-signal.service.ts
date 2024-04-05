import { Injectable, signal } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class MailSignalService {
  mailSig = signal<string>("");
  mailState = signal<string>("");
}
