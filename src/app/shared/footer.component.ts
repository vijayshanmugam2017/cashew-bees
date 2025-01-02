import { CommonModule } from '@angular/common';
import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule , CardModule, ButtonModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./header-footer.component.css'], 
})
export class FooterComponent {


}