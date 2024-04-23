import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  QueryList,
  ViewChild,
  inject,
  ViewChildren,
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
export class ContactComponent implements OnInit, OnDestroy {
  patternService = inject(PatternService);
  firebaseService = inject(FirebaseService);
  mailService = inject(MailSignalService);
  contactData = this.patternService.contactData;
  validation = this.patternService.validation;
  firebaseSubscription: Subscription | undefined;
  @ViewChild("loader") loader!: ElementRef;
  @ViewChildren("input") inputs!: QueryList<ElementRef>;

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
    Object.values(this.validation).every((val) => val === true)
      ? (this.patternService.valid = true)
      : (this.patternService.valid = false);
  }
  sendEmail() {
    if (Object.values(this.validation).includes(false)) {
      console.log("Fail");
      return;
    }
    this.firebaseService.sendMail(this.contactData);
  }
  resetMailState(element: any, mailState: any){
element.style.display = "none";
mailState.set('');
this.mailService.mailSig.set('');
this.inputs.forEach(input => input.nativeElement.value = '');
this.patternService.valid = false;
  }

  ngOnInit(): void {
    
    this.firebaseSubscription = this.firebaseService
      .getContact()
      .subscribe((subscription) => {
        const sendedMail = subscription.find(
          (obj) => obj.id === this.mailService.mailSig()
        );
        if (sendedMail && sendedMail.delivery) {
         let element =  this.loader.nativeElement
          let mailState = this.mailService.mailState;
          element.style.display = "inline";
          mailState.set(sendedMail.delivery.state);
          if (sendedMail.delivery.state == "SUCCESS") setTimeout(()=>this.resetMailState(element,mailState),500);
        }
      });
  }
  ngOnDestroy(): void {
    if (this.firebaseSubscription) {
      this.firebaseSubscription.unsubscribe();
    }
  }
}
