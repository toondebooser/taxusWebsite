import { AfterViewInit, Component, OnInit, inject } from '@angular/core';
import { DOMService } from '../services/dom.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-vellen',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './vellen.component.html',
  styleUrl: './vellen.component.css'
})
export class VellenComponent implements AfterViewInit {
  domService = inject(DOMService);

  ngAfterViewInit(): void {
    this.domService.scrollElementToTop('.content')
  }
}
