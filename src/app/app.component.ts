import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PLATILLOSComponent } from './platillos/platillos.component';

@Component({
  selector: 'app-root',
  imports: [PLATILLOSComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'TAREA_COMPONENTE_RESTAURANTE';
  entradas = [
    { name: 'Edamame', price: 6, ingredients: 'Soja hervida con sal', description: 'Un aperitivo saludable y delicioso.', image: 'https://th.bing.com/th/id/R.20a45b2028ccf0462927d4203ed403f7?rik=swoczi6%2f259Pzw&riu=http%3a%2f%2fwww.livinglou.com%2fwp-content%2fuploads%2f2013%2f10%2fhealthy-edamame-snack.jpg&ehk=%2bzj0CigwDuZWO%2f6gF3Rbp%2fsZB0ddyGRGDmIhZdephJU%3d&risl=&pid=ImgRaw&r=0' },
    { name: 'Gyoza', price: 8, ingredients: 'Dumplings rellenos de cerdo y vegetales', description: 'Empanaditas japonesas con salsa de soja.', image: 'https://th.bing.com/th/id/OIP.zTBpmjqyizBizo0caB-UXgHaE9?w=245&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
    { name: 'Takoyaki', price: 9, ingredients: 'Bolas de masa con pulpo', description: 'Uno de los street foods más famosos de Japón.', image: 'https://th.bing.com/th/id/OIP.O7weeCpaNh78ch3jpl98iAHaEr?w=227&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
    { name: 'Sunomono', price: 7, ingredients: 'Ensalada de pepino con vinagre', description: 'Refrescante y ligera.', image: 'https://th.bing.com/th/id/OIP.un2ZgGY8k3lDoAZwl_1rKwHaE8?w=297&h=197&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
    { name: 'Karaage', price: 10, ingredients: 'Pollo frito estilo japonés', description: 'Crujiente por fuera, jugoso por dentro.', image: 'https://th.bing.com/th/id/OIP.Cd0UU5lw3MoRx_TzgqO6mAHaEK?w=298&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7' }
  ];
  

  platosFuertes = [
    { name: 'Sukiyaki', price: 28, ingredients: 'Carne de res, tofu, verduras, fideos udon, salsa de soja y mirin', description: 'Un delicioso guiso japonés cocinado en la mesa con una salsa dulce y salada.', image: 'https://th.bing.com/th/id/OIP.xTu4k6jgCkpfkwVEC0qxuQHaE8?w=270&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
    { name: 'Gyudon', price: 18, ingredients: 'Ternera en tiras, arroz blanco, cebolla, salsa de soja', description: 'Un cuenco de arroz cubierto con ternera caramelizada y especias tradicionales japonesas.', image: 'https://th.bing.com/th/id/OIP.NaFdZWd92xZ2kJiv2lubnQHaEo?w=308&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
    { name: 'Okonomiyaki', price: 22, ingredients: 'Harina, huevo, repollo, panceta, salsa especial, mayonesa japonesa', description: 'La famosa "pizza japonesa", una mezcla de sabores y texturas irresistibles.', image: 'https://th.bing.com/th/id/OIP.s3El6R8x5gGFzNIibrdspAHaE8?w=243&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
    { name: 'Tonkatsu', price: 24, ingredients: 'Chuleta de cerdo empanizada, arroz, col rallada, salsa tonkatsu', description: 'Crujiente por fuera y jugoso por dentro, acompañado de una salsa intensa y sabrosa.', image: 'https://th.bing.com/th/id/OIP.byJEAYFiTPkwXRwC-5ZUdQHaE8?w=241&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
    { name: 'Unagi Kabayaki', price: 30, ingredients: 'Anguila, salsa de soja dulce, arroz, especias', description: 'Un plato sofisticado con anguila caramelizada sobre arroz caliente.', image: 'https://th.bing.com/th/id/OIP.K7Ls9JunyF7_WNcWgoXQNgHaE8?w=230&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7' }
  ];
  
  

  postres = [
    { name: 'Mochi', price: 8, ingredients: 'Harina de arroz, azúcar, relleno de frijol dulce (anko)', description: 'Pequeñas bolas de arroz glutinado con un centro suave y dulce.', image: 'https://th.bing.com/th/id/OIP.hfd8terLtz2zzjXEPK529wHaEE?w=298&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
    { name: 'Dorayaki', price: 10, ingredients: 'Panqueques japoneses, pasta de frijol rojo', description: 'Un postre típico japonés con una textura esponjosa y relleno dulce.', image: 'https://th.bing.com/th/id/OIP.EmkUca7qZOTNwcaij0UWRAHaE7?w=294&h=195&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
    { name: 'Taiyaki', price: 9, ingredients: 'Harina, azúcar, huevo, pasta de frijol rojo, chocolate opcional', description: 'Un pastel en forma de pez relleno, perfecto para los amantes del dulce.', image: 'https://th.bing.com/th/id/OIP.YL-SCTRgClnqWj1087X5qgHaE6?w=223&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
    { name: 'Matcha Ice Cream', price: 12, ingredients: 'Té verde matcha, leche, azúcar', description: 'Helado suave y cremoso con el sabor único y refrescante del matcha.', image: 'https://th.bing.com/th/id/OIP.hAIIaYsn_as2EafqBmv2wQHaE8?w=243&h=181&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
    { name: 'Hojicha Pudding', price: 11, ingredients: 'Té hojicha, crema, azúcar, leche', description: 'Un postre cremoso con la esencia tostada del té hojicha.', image: 'https://th.bing.com/th/id/OIP.UamjzIF20p3P0s_mc1GqSQHaHa?w=169&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7https://th.bing.com/th/id/OIP.WNbcMH9N8yT1aT2z_G3zCAHaHa?w=178&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7' }
  ];
  
  
}
