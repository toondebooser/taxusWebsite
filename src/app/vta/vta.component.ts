import { Component, OnInit, inject } from '@angular/core';
import { DOMService } from '../services/dom.service';

@Component({
  selector: 'app-vta',
  standalone: true,
  imports: [],
  templateUrl: './vta.component.html',
  styleUrl: './vta.component.css'
})
export class VtaComponent {
  domService = inject(DOMService);

ngOnInit(): void {
  this.domService.scrollElementToTop('.content')
}
}
