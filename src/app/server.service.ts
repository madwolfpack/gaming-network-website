import { Injectable } from '@angular/core';
import { Server } from './models/server.model';
import { Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';

interface McStatusResponse {
  online: boolean;
  players: {
    online: number;
    max: number;
    list?: { name: string; id: string }[];
  };
  motd?: {
    raw: string;
    clean: string;
    html: string[];
  };
  version?: {
    name_raw: string;
    name_clean: string;
    protocol: number;
  };
  icon: string | null; // The icon property exists directly at the top level
  plugins?: string[];
  mods?: { id: string; version: string }[];
  // ... other properties from the API response ...
}

@Injectable({
  providedIn: 'root'
})
export class ServerService {
  private minecraftServerIp = 'mc.playtsc.com'; // Replace with your server IP
  private minecraftServerPort = 25565; // Default Minecraft port

  constructor(private http: HttpClient) { }

  getServers(): Observable<Server[]> {
    const apiUrl = `https://api.mcstatus.io/v2/status/java/${this.minecraftServerIp}:${this.minecraftServerPort}`;

    return this.http.get<McStatusResponse>(apiUrl).pipe(
      map(response => {
        return [
          {
            id: 1,
            name: 'TSC Earth SMP',
            game: 'Minecraft',
            status: response.online ? 'online' : 'offline',
            players: response.players.online,
            maxPlayers: response.players.max,
            ipAddress: `${this.minecraftServerIp}`,
            motd: response.motd?.clean ? response.motd.clean.replace(/\n/g, ' ') : '',
            version: response.version?.name_clean, // Updated mapping for version
            favicon: response.icon // Updated mapping for favicon
          } as Server
        ];
      })
    );
  }
}