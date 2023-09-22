// Types related to the route data
export interface RouteData {
  zone: string;
  maxAttempts: number;
  pointValue: number;
}

// Type definition for the entire routes object
export type Routes = {
  [routeId: string]: RouteData;
}

// Types related to the climber data
export interface ClimberData {
  name: string;
  totalScore: number;
}

// Type definition for the entire climbers object
export type Climbers = {
  [climberId: string]: ClimberData;
}

// Existing User, FormFields, and Submission types
export interface User {
  id: string;
  login: string;
  avatarUrl: string;
  score: number;
}

export interface FormFields {
  climberId: string;
  routeNumber: string;
  zone: string;
  counterValue: number;
  topout: boolean;
}

export interface Submission {
  user: User;
  formFields: FormFields;
  submissionTime: Date;
}
