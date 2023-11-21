import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private el: ElementRef) {}

  scrollToContact() {
    const contactoSection = this.el.nativeElement.ownerDocument.getElementById('contacto');
    if (contactoSection) {
      contactoSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
