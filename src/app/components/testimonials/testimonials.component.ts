import { Component } from '@angular/core';

interface Customer {
  name: string;
  review: string;
  imageUrl: string;
}

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent {
  customers: Customer[] = [
    {
      name: 'Ana Maria',
      review: '¡Estoy encantado con el servicio! La calidad del trabajo es excelente.',
      imageUrl: 'assets/customers/customer1.jpg'
    },
    {
      name: 'Gabriela',
      review: 'Increíble trabajo en la remodelación de mi piscina. ¡Muy satisfecho!',
      imageUrl: 'assets/customers/customer2.jpg'
    },
    {
      name: 'Daniela',
      review: 'Excelente servicio de construcción de piscinas.',
      imageUrl: 'assets/customers/customer3.jpg'
    },
    {
      name: 'Juliet',
      review: 'Remodelaron la psicina de mis sueños, ¡Increible servicio!',
      imageUrl: 'assets/customers/customer4.jpg'
    },
  ];
}
