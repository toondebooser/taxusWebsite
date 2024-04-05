import { AfterViewInit, Component, OnInit, inject } from "@angular/core";
import { RouterLink } from "@angular/router";
import { DOMService } from "../services/dom.service";

@Component({
  selector: 'app-standplaats-verbetering',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './standplaats-verbetering.component.html',
  styleUrl: './standplaats-verbetering.component.css'
})
export class StandplaatsVerbeteringComponent implements AfterViewInit {
  domService = inject(DOMService);

  ngAfterViewInit(): void {
    this.domService.scrollElementToTop('.content')
  }
}
