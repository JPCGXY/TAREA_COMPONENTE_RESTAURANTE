import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-platillos',
  imports: [CommonModule],
  templateUrl: './platillos.component.html',
  styleUrl: './platillos.component.css'
})
export class PLATILLOSComponent {
  @Input() categoryTitle: string = '';
  @Input() dishes: any[] = [];

  addDish() {
    const newDish = {
      name: 'Udon Tempura',
      price: 20,
      ingredients: 'Fideos udon, caldo dashi, tempura de camarón',
      description: 'Un delicioso platillo japonés con fideos gruesos y crujiente tempura.',
      image: 'https://th.bing.com/th/id/OIP.hQQfKB09HXYMZBBs3rUdAQHaFT?w=292&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7'
    };
    this.dishes.push(newDish);
  }
  

  removeDish(index: number) {
    this.dishes.splice(index, 1);
  }
}
