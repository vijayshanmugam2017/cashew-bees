import { CommonModule } from '@angular/common';
import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule , CardModule, ButtonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header-footer.component.css'], 
})
export class HeaderComponent {
  isMobileView: boolean = false;
  isMobileMenuOpen: boolean = false;
  @ViewChild('navbar', { static: true }) navbar!: ElementRef;
  private scrollListener!: () => void;
  selectedFilter: string = 'all';

  constructor(private renderer: Renderer2,private router: Router) {
    // Check window width on load
    this.checkMobileView();
  }

  ngOnInit() {
    // Ensure window is available before adding event listeners
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', () => this.checkMobileView());
    }
    // this.updateNavbarOpacity(0);
    // this.scrollListener = this.renderer.listen('window', 'scroll', () => this.onWindowScroll());
  }
    // Method to check if the device is mobile or desktop
    checkMobileView() {
        if (typeof window !== 'undefined') {
          this.isMobileView = window.innerWidth <= 768;
        }
      }
    
      // Toggle the mobile menu
      toggleMobileMenu() {
        this.isMobileMenuOpen = !this.isMobileMenuOpen;
      }
    
      onWindowScroll() {
        const scrollPosition = window.scrollY;
        const maxScroll = 300; // Distance for full transparency
        const opacity = scrollPosition === 0 ? 1 : Math.max(0.3, 1 - scrollPosition / maxScroll); 
        this.renderer.setStyle(
          this.navbar.nativeElement,
          'background-color',
          `rgba(0, 0, 0, ${opacity})`
        );
      }
}
