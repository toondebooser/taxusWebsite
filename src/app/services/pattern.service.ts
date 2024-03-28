import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class PatternService {
  contactData: any = {
    to: "",
    from: "",
    phone: "",
    subject: "",
    message: "",
  };
}
