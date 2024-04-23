import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
  inject,
  viewChild
} from "@angular/core";
import { PatternService } from "../services/pattern.service";
import { FirebaseService } from "../services/firebase.service";
import { MailSignalService } from "../services/mail-signal.service";
import { Subscription } from "rxjs";
import { NgIf } from "@angular/common";

@Component({
  selector: "app-contact",
  standalone: true,
  imports: [NgIf],
  templateUrl: "./contact.component.html",
  styleUrl: "./contact.component.css",
})
export class ContactComponent implements OnInit, OnDestroy, AfterViewInit {
  patternService = inject(PatternService);
  firebaseService = inject(FirebaseService);
  mailService = inject(MailSignalService);
  contactData = this.patternService.contactData;
  validation = this.patternService.validation;
  firebaseSubscription: Subscription | undefined;
  @ViewChild("loader") loader!: ElementRef;
  @ViewChild("email") email!: ElementRef;

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
  Object.values(this.validation).every(val => val === true)? this.patternService.valid = true : this.patternService.valid=false
     
  
      
  }
  sendEmail() {
    if (Object.values(this.validation).includes(false)) {
      console.log("Fail");
      return;
    }
    this.firebaseService.sendMail(this.contactData);
  }
  ngAfterViewInit(): void {
    console.log(this.email);
  }
  ngOnInit(): void {
    this.firebaseSubscription = this.firebaseService
      .getContact()
      .subscribe((subscription) => {
        const sendedMail = subscription.find(
          (obj) => obj.id === this.mailService.mailSig()
        );
        if (sendedMail && sendedMail.delivery) {
          this.loader.nativeElement.style.display = "inline";
          this.mailService.mailState.set(sendedMail.delivery.state);
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
