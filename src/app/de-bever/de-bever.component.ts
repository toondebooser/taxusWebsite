import { AfterViewInit, Component, OnInit, inject } from '@angular/core';
import { DOMService } from '../services/dom.service';

@Component({
  selector: 'app-de-bever',
  standalone: true,
  imports: [],
  templateUrl: './de-bever.component.html',
  styleUrl: './de-bever.component.css'
})
export class DeBeverComponent implements AfterViewInit {
  domService = inject(DOMService);

  ngAfterViewInit(): void {
    this.domService.scrollElementToTop('.content')
  }
}
