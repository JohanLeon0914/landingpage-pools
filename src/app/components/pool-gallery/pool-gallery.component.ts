import { Component } from '@angular/core';
interface Pool {
  id: number;
  name: string;
  imageUrl: string;
}

@Component({
  selector: 'app-pool-gallery',
  templateUrl: './pool-gallery.component.html',
  styleUrls: ['./pool-gallery.component.css']
})
export class PoolGalleryComponent {
  pools: Pool[] = [
    { id: 1, name: 'Piscina 1', imageUrl: 'assets/pools/piscina1.jpg' },
    { id: 2, name: 'Piscina 2', imageUrl: 'assets/pools/piscina2.jpg' },
    { id: 3, name: 'Piscina 3', imageUrl: 'assets/pools/piscina3.jpg' },
    { id: 4, name: 'Piscina 4', imageUrl: 'assets/pools/piscina4.jpg' },
    { id: 5, name: 'Piscina 5', imageUrl: 'assets/pools/piscina5.jpg' },
    { id: 6, name: 'Piscina 6', imageUrl: 'assets/pools/piscina6.jpg' }
  ];
}
