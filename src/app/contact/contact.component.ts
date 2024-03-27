import { Component } from "@angular/core";

@Component({
  selector: "app-contact",
  standalone: true,
  imports: [],
  templateUrl: "./contact.component.html",
  styleUrl: "./contact.component.css",
})
export class ContactComponent {
  contactData: any = {
    to: "",
    from: "",
    phone: "",
    subject: "",
    message: "",
  };
  getObjectKeys(obj: any): string[] {
    return Object.keys(obj);
  }
  isValidEmail(input: string): boolean {
    // Regular expression pattern for email validation
    const emailPattern: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(input);
  }
  userInput(event: Event, dataType: string): void {
    const input = event.target as HTMLInputElement;
    this.contactData[dataType] = input.value;
    console.log(this.contactData);
    console.log(this.isValidEmail(input.value))
  }
}
