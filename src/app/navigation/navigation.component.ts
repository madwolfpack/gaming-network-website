import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // Import RouterModule

@Component({
  selector: 'app-navigation',
  standalone: true, // Make sure this is true
  imports: [RouterModule], // Add RouterModule to the imports array
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  // You can add any logic for your navigation here
}