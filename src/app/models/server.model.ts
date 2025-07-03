export interface Server {
  id: number;
  name: string;
  game: string;
  status: 'online' | 'offline';
  players: number;
  maxPlayers: number;
  ipAddress: string;
  description?: string;
  motd?: string; // Add MOTD
  version?: string; // Add Version
  favicon?: string; // Add Favicon
  // Add other properties as needed
}