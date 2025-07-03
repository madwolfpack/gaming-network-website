import { Component, OnInit } from '@angular/core';
import { ServerService } from '../server.service';
import { Server } from '../models/server.model';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { HttpClientModule } from '@angular/common/http'; // Make sure this is here too

@Component({
  selector: 'app-server-list',
  standalone: true,
  imports: [CommonModule, HttpClientModule], // Add CommonModule to the imports
  templateUrl: './server-list.component.html',
  styleUrls: ['./server-list.component.scss']
})
export class ServerListComponent implements OnInit {
  servers: Server[] = [];

  constructor(private serverService: ServerService) { }

  ngOnInit(): void {
    this.serverService.getServers().subscribe(servers => {
      this.servers = servers;
      console.log('Fetched servers:', this.servers); // Keep this for debugging
    });
  }
}