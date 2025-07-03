import { Routes } from '@angular/router';
import { ServerListComponent } from './server-list/server-list.component';
import { HomeComponent } from './home/home.component'; // Assuming you have this
import { CommunityComponent } from './community/community.component';
import { ForumsComponent } from './forums/forums.component';
import { FaqComponent } from './faq/faq.component';
import { GuidelinesComponent } from './guidelines/guidelines.component';
// Import other components for 'community' and 'forums'

export const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' }, // Ensure pathMatch: 'full' for the empty path
  { path: 'servers', component: ServerListComponent },
  { path: 'community', component: CommunityComponent },
  { path: 'forums', component: ForumsComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'guidelines', component: GuidelinesComponent},
  // ... any other routes ...
];