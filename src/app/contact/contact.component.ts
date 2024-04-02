import { Component, OnDestroy, OnInit, inject } from "@angular/core";
import { PatternService } from "../services/pattern.service";
import { FirebaseService } from "../services/firebase.service";
import { MailSignalService } from "../services/mail-signal.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-contact",
  standalone: true,
  imports: [],
  templateUrl: "./contact.component.html",
  styleUrl: "./contact.component.css",
})
export class ContactComponent implements OnInit, OnDestroy {
  patternService = inject(PatternService);
  firebaseService = inject(FirebaseService);
  mailSignal = inject(MailSignalService);
  contactData = this.patternService.contactData;
  validation = this.patternService.validation;
  firebaseSubscription: Subscription | undefined;

  getObjectKeys(obj: any): string[] {
    return Object.keys(obj);
  }
  isValid(input: string, inputType: string): boolean {
    const regexPattern: RegExp = this.patternService.regexPatterns[inputType];
    return regexPattern.test(input);
  }
  userInput(event: Event, inputType: string): void {
    const input = event.target as HTMLInputElement;
    this.contactData[inputType] = input.value.replaceAll("\n", "<br>");
    input.value === ""
      ? (this.validation[inputType] = null)
      : (this.validation[inputType] = this.isValid(input.value, inputType));
  }
  sendEmail() {
    if (Object.values(this.validation).includes(false)) {
      console.log("Fail");
      return;
    }
    this.firebaseService.sendMail(this.contactData);
  }
  ngOnInit(): void {
    this.firebaseSubscription = this.firebaseService
      .getContact()
      .subscribe((subscription) => {
        console.log(subscription);

        const sendedMail = subscription.find(
          (obj) => obj.id === this.mailSignal.mailSig()
        );
        if (sendedMail && sendedMail.delivery) {
          console.log(sendedMail.delivery.state);
        }
      });
  }
  ngOnDestroy(): void {
    if (this.firebaseSubscription) {
      this.firebaseSubscription.unsubscribe();
      console.log(this.firebaseSubscription);
    }
  }
}
