import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // Ensure this import is present

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule, RouterModule], // Ensure RouterModule is in the imports array
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss'
})
export class FaqComponent { }