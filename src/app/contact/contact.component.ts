import { Component, inject } from "@angular/core";
import { PatternService } from "../services/pattern.service";

@Component({
  selector: "app-contact",
  standalone: true,
  imports: [],
  templateUrl: "./contact.component.html",
  styleUrl: "./contact.component.css",
})
export class ContactComponent {
  contactPattern = inject(PatternService).contactData;

  getObjectKeys(obj: any): string[] {
    return Object.keys(obj);
  }
  isValidEmail(input: string): boolean {
    const emailPattern: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(input);
  }
  userInput(event: Event, dataType: string): void {
    const input = event.target as HTMLInputElement;
    this.contactPattern[dataType] = input.value;
    console.log(this.contactPattern);
  }
}
