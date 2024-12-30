import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule,RouterOutlet, MainPageComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cashew-bees';
}
