import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { CardModule } from 'primeng/card';
import { MenubarModule } from 'primeng/menubar';
import { FormsModule } from '@angular/forms'; 
import { DropdownModule } from 'primeng/dropdown';
import { Router } from '@angular/router';
import { CarouselModule, CarouselResponsiveOptions } from 'primeng/carousel';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [CommonModule, MenubarModule, CardModule, FormsModule,DropdownModule,CarouselModule],
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],  // Corrected styleUrl to styleUrls
})
export class MainPageComponent implements OnInit {
  isMobileView: boolean = false;
  isMobileMenuOpen: boolean = false;
  @ViewChild('navbar', { static: true }) navbar!: ElementRef;
  @ViewChild('aboutSection') aboutSection: ElementRef | undefined;
  @ViewChild('productsSection') productsSection: ElementRef | undefined;

  private scrollListener!: () => void;
  selectedFilter: string = 'all';
  // State for modal
  isModalOpen = false;
  selectedImageIndex: number | null = null;
  selectedImage: any = null;

  // Define the filter options
  filterOptions = [
    { label: 'All', value: '*' },
    { label: 'Kernal', value: 'kernals' },
    { label: 'Shell', value: 'shell' },
    { label: 'Husk', value: 'husk' },
  ];

  cards = [
    { image: 'assets/images/kernals/kernal-1.jpg', category: 'kernals' },
    { image: 'assets/images/kernals/kernal-2.jpg', category: 'kernals' },
    { image: 'assets/images/kernals/kernal-5.jpg', category: 'kernals' },
    { image: 'assets/images/nutshell/nut-shell-1.jpg', category: 'shell' },
    { image: 'assets/images/nutshell/nut-shell-2.jpg', category: 'shell' },
    { image: 'assets/images/nutshell/nut-shell-3.jpg', category: 'shell' },
    { image: 'assets/images/husk/husk-1.png', category: 'husk' },
    { image: 'assets/images/husk/husk-2.jpg', category: 'husk' },
    { image: 'assets/images/husk/husk-3.jpg', category: 'husk' }
    // More images...
  ];

  services = [
    { icon: 'bi bi-check2-circle', title: 'Quality', description: 'Our top priority is ensuring regular quality control at every stage, from selecting the finest nuts to processing and, ultimately, packaging.' },
    { icon: 'bi bi-database-up', title: 'Quantity', description: 'We deliver a wide range of products, ensuring not just the best quality but also letting our quantity speak for itself.' },
    { icon: 'bi bi-truck', title: 'Shipment', description: 'Efficient planning in processing, packaging, and coordination has enabled us to ensure timely delivery while adhering to the specified standards.' },
    { icon: 'bi bi-tree', title: 'Natural', description: 'From selecting the finest nuts to shipment, we ensure everything is handled naturally, complemented by skilled manpower.' },
    { icon: 'bi bi-person-heart', title: 'Appetite', description: "Our products provide the best taste you've ever experienced while also supporting your health." },
    { icon: 'bi bi-calendar2-week', title: '24/7 Support', description: 'We deliver products worldwide and ensure our team provides the best support until your complete satisfaction is achieved.' }
  ];

  filteredCards = [...this.cards];
responsiveOptions: CarouselResponsiveOptions[]|undefined;


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
  filterCards(category: string) {
    this.selectedFilter = category;
    if (category === '*') {
      this.filteredCards = [...this.cards]; // Show all cards
    } else {
      this.filteredCards = this.cards.filter(card => card.category === category);
    }
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
  private updateNavbarOpacity(scrollPosition: number) {
    const maxScroll = 300; // Distance for full transparency
    const opacity = scrollPosition === 0 ? 1 : Math.max(0.3, 1 - scrollPosition / maxScroll); // Ensure opacity is 1 at the top
    this.renderer.setStyle(
      this.navbar.nativeElement,
      'background-color',
      `rgba(0, 0, 0, ${opacity})`
    );
  }

  // Open the modal and set the selected image
  openPreviewModal(index: number) {
    this.selectedImageIndex = index;
    this.selectedImage = this.filteredCards[index];
    this.isModalOpen = true;
  }

  // Close the modal
  closePreviewModal() {
    this.isModalOpen = false;
    this.selectedImage = null;
    this.selectedImageIndex = null;
  }

  // Change the image when clicking left or right
  changeImage(direction: 'prev' | 'next') {
    if (this.selectedImageIndex !== null) {
      if (direction === 'prev') {
        this.selectedImageIndex = this.selectedImageIndex === 0 ? this.filteredCards.length - 1 : this.selectedImageIndex - 1;
      } else if (direction === 'next') {
        this.selectedImageIndex = this.selectedImageIndex === this.filteredCards.length - 1 ? 0 : this.selectedImageIndex + 1;
      }
      this.selectedImage = this.filteredCards[this.selectedImageIndex];
    }
  }

  navigateToPage(category: string): void {
    this.router.navigate([`/${category}`]);
  }

  navigateToPage1(category: string): void {
    if (category === 'nature') {
      this.router.navigate(['/nature']);
    } else if (category === 'city') {
      this.router.navigate(['/city']);
    } else if (category === 'animals') {
      this.router.navigate(['/animals']);
    } else {
      console.error('Unknown category:', category);
    }
  }

  redirectToWhatsApp() {
    const message = encodeURIComponent("I need a quote");
    const whatsappUrl = `https://wa.me/8667220431?text=${message}`; // Replace '1234567890' with your WhatsApp number.
    window.open(whatsappUrl, '_blank');
  }

  ngOnDestroy() {
    // Unsubscribe from the scroll event listener
    if (this.scrollListener) {
      this.scrollListener();
    }
  }
}
