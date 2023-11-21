import { Component } from '@angular/core';
interface Service {
  name: string;
  description: string;
  imageUrl: string;
}

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
  services: Service[] = [
    {
      name: 'Diseño Personalizado',
      description: 'Transformamos tus ideas en diseños personalizados para tu piscina.',
      imageUrl: 'assets/our-services/service1.jpg'
    },
    {
      name: 'Construcción de Piscinas',
      description: 'Expertos en la construcción de piscinas de alta calidad y durabilidad.',
      imageUrl: 'assets/our-services/service2.webp'
    },
    {
      name: 'Remodelación',
      description: 'Renovamos y mejoramos tu piscina para que se adapte a tus necesidades.',
      imageUrl: 'assets/our-services/service3.jpg'
    },
  ];

}
