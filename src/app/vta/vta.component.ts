import { AfterViewInit, Component, OnInit, inject } from '@angular/core';
import { DOMService } from '../services/dom.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-vta',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './vta.component.html',
  styleUrl: './vta.component.css'
})
export class VtaComponent implements AfterViewInit {
  domService = inject(DOMService);

  ngAfterViewInit(): void {
    this.domService.scrollElementToTop('.content')
  }
}
