import { Component, OnInit, inject } from '@angular/core';
import { DOMService } from '../services/dom.service';

@Component({
  selector: 'app-atelier',
  standalone: true,
  imports: [],
  templateUrl: './atelier.component.html',
  styleUrl: './atelier.component.css'
})
export class AtelierComponent implements OnInit {
  domService = inject(DOMService);

ngOnInit(): void {
  this.domService.scrollElementToTop('.content')
}
}
