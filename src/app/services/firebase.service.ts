import { Inject, Injectable, inject } from "@angular/core";
import {
  DocumentSnapshot,
  Firestore,
  addDoc,
  collection,
  collectionData,
  doc,
  getDoc,
} from "@angular/fire/firestore";
import { Observable, from, map } from "rxjs";
import { MailSignalService } from "./mail-signal.service";

@Injectable({
  providedIn: "root",
})
export class FirebaseService {
  firestore = inject(Firestore);
  mailService = inject(MailSignalService);
  mail = collection(this.firestore, "mail");
  
    getContact(): Observable<any[]> {
      const data = collectionData(this.mail, {
        idField: "id",
      });
      return data as Observable<any[]>;
    }

  sendMail(contactData: any) {
    const mailTemplate = {
      to: "taxus.work@gmail.com",
      replyTo: contactData.email,
      message: {
        subject: contactData.telefoon,
        html: contactData.bericht,
      },
    };
    const promise = addDoc(this.mail, mailTemplate).then((response) => {
      this.mailService.mailSig.set(response.id)
      
    });
    return from(promise);
  }
}
