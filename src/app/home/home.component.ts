import { Component, OnInit, inject } from '@angular/core';
import { DOMService } from '../services/dom.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  domService = inject(DOMService);

ngOnInit(): void {
  this.domService.scrollElementToTop('.content')
}
}
