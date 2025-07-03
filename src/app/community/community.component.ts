import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // Import RouterModule

@Component({
  selector: 'app-community',
  standalone: true, // Mark as standalone
  imports: [CommonModule, RouterModule], // Import RouterModule
  templateUrl: './community.component.html',
  styleUrl: './community.component.scss'
})
export class CommunityComponent { }