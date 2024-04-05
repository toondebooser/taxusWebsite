import { AfterViewInit, Component, OnInit, inject } from '@angular/core';

import { DOMService } from '../services/dom.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-atelier',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './atelier.component.html',
  styleUrl: './atelier.component.css'
})
export class AtelierComponent implements AfterViewInit {
  domService = inject(DOMService);

  ngAfterViewInit(): void {
    this.domService.scrollElementToTop('.content')
  }
}
