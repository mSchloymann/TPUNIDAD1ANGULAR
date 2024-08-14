import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule],
  template: `
  <main class="main">
    <div class="content">

      <h1>{{saludo}} {{nombre}}</h1>

      <input 
      [(ngModel)]="nombre"
      type="text" 
      placeholder="Escribe tu nombre"/>
    </div>
  </main> 
   `,
  styleUrl: './app.component.css'
})
export class AppComponent {
    saludo: string = "HOLA";
    nombre: string = ""
}

