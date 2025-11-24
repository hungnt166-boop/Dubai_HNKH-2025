export interface Activity {
  time: string;
  title: string;
  description: string;
  icon?: string;
}

export interface DaySchedule {
  day: number;
  date: string;
  title: string;
  activities: Activity[];
}

export interface LocationInfo {
  name: string;
  description: string;
  note: string;
  image?: string;
}

export interface FlightInfo {
  code: string;
  route: string;
  time: string;
  date: string;
  checkUrl: string; // URL to check flight status
}

export interface ContactInfo {
  name: string;
  role: string;
  zalo: string;
  phone: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  isStreaming?: boolean;
}