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
    to: "1",
    from: "2",
    phone: "3",
    subject: "4",
    message: "5",
  };
  getObjectKeys(obj: any): string[] {
    return Object.keys(obj);
  }
  userInput(event: Event, dataType: string): void {
    const input = event.target as HTMLInputElement;
    this.contactData[dataType] = input.value;
    console.log(this.contactData);
  }
}
