import { Component, OnInit, inject } from "@angular/core";
import { RouterLink } from "@angular/router";
import { DOMService } from "../services/dom.service";

@Component({
  selector: "app-snoeien",
  standalone: true,
  imports: [RouterLink],
  templateUrl: "./snoeien.component.html",
  styleUrl: "./snoeien.component.css",
})
export class SnoeienComponent implements OnInit {
domService = inject(DOMService);

ngOnInit(): void {
  this.domService.scrollElementToTop('.content')
}
}
