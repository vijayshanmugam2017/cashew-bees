import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-kernals',
  standalone: true,
  imports: [CardModule, ButtonModule],
  templateUrl: './kernals.component.html',
  styleUrl: './kernals.component.css'
})
export class KernalsComponent {

}
