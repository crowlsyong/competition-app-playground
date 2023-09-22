// FormFields.ts

interface Route {
  routeId: string;
  pointValue: number;
  maxAttempts: number;
}

interface Zone {
  zoneId: string;
  routes: Route[];
}

export interface FormFields {
  climberId: string;
  zone: Zone;  // Changed from string to Zone object
  selectedRoute: Route;  // New field to hold selected Route information
  counterValue: number;
  topout: boolean;
  maxAttempts: number; // New field for maximum attempts
  dynamicPointValue: number; // New field for dynamic point value
}
