import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // Import RouterModule


@Component({
  selector: 'app-navigation',
  standalone: true, // Make sure this is true
  imports: [CommonModule, RouterModule], // Add RouterModule to the imports array
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})

export class NavigationComponent {
  navItems = [
{ icon: 'fa fa-home', name: 'Home', path: '/' },
{ icon: 'fa fa-user', name: 'Servers', path: '/servers' },
{ icon: 'fa fa-cog', name: 'Community', path: '/community' },
{ icon: 'fa fa-cog', name: 'Map', path: 'https://maps.playtsc.com' },
{ icon: 'fa fa-cog', name: 'Discord', path: '/discord' }
  ];
}
