import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule

@Component({
  selector: 'app-guidelines',
  standalone: true, // Add this line
  imports: [CommonModule], // Add CommonModule to imports
  templateUrl: './guidelines.component.html',
  styleUrl: './guidelines.component.scss'
})
export class GuidelinesComponent {

}