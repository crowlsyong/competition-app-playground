/// <reference lib="deno.unstable" />

const kv = await Deno.openKv();

// Define the key for storing routes data
const routesKey = ["routes"];

// Initialize routes data as a key-value object
const routes = {
  // Zone 1
  'z1r1': { zone: 'Z1', maxAttempts: 3, pointValue: 10 },
  'z1r2': { zone: 'Z1', maxAttempts: 2, pointValue: 20 },
  'z1r3': { zone: 'Z1', maxAttempts: 4, pointValue: 15 },
  'z1r4': { zone: 'Z1', maxAttempts: 1, pointValue: 25 },
  'z1r5': { zone: 'Z1', maxAttempts: 5, pointValue: 5 },
  // Zone 2
  'z2r1': { zone: 'Z2', maxAttempts: 3, pointValue: 12 },
  'z2r2': { zone: 'Z2', maxAttempts: 2, pointValue: 18 },
  'z2r3': { zone: 'Z2', maxAttempts: 4, pointValue: 16 },
  'z2r4': { zone: 'Z2', maxAttempts: 1, pointValue: 24 },
  'z2r5': { zone: 'Z2', maxAttempts: 5, pointValue: 6 },
  // Zone 3
  'z3r1': { zone: 'Z3', maxAttempts: 3, pointValue: 11 },
  'z3r2': { zone: 'Z3', maxAttempts: 2, pointValue: 19 },
  'z3r3': { zone: 'Z3', maxAttempts: 4, pointValue: 14 },
  'z3r4': { zone: 'Z3', maxAttempts: 1, pointValue: 23 },
  'z3r5': { zone: 'Z3', maxAttempts: 5, pointValue: 7 }
};

// Store the routes data
await kv.set(routesKey, JSON.stringify(routes));

// Function to retrieve route data by routeId
export async function getRoute(routeId: string): Promise<Route | null> {
  const routesData: Deno.KvEntryMaybe<string> = await kv.get(routesKey, { consistency: "strong" });
  if (!routesData || routesData.value === null) return null;
  const routes: Record<string, Route> = JSON.parse(routesData.value);
  return routes[routeId] || null;
}

// Function to retrieve all route IDs as an array
export async function getAllRoutes(): Promise<string[]> {
  const routesData: Deno.KvEntryMaybe<string> = await kv.get(routesKey, { consistency: "strong" });
  if (!routesData || routesData.value === null) return [];
  
  const routes: Record<string, Route> = JSON.parse(routesData.value);
  return Object.keys(routes);
}

interface Route {
  zone: string;
  maxAttempts: number;
  pointValue: number;
}

interface Climber {
  name: string;
  totalScore: number;
}

// Function to retrieve all climber names as an array
export async function getAllClimbers(): Promise<string[]> {
  const climbersData: Deno.KvEntryMaybe<string> = await kv.get(climbersKey, { consistency: "strong" });
  if (!climbersData || climbersData.value === null) return [];

  const climbers: Record<string, Climber> = JSON.parse(climbersData.value);
  return Object.values(climbers).map((climber: Climber) => climber.name);
}

// Define the key for storing climbers data
const climbersKey = ["climbers"];

// Initialize climbers data as a key-value object
const climbers = {
  'climber1': { name: 'Alice', totalScore: 10 },
  'climber2': { name: 'Bob', totalScore: 20 },
  'climber3': { name: 'Charlie', totalScore: 30 },
  'climber4': { name: 'David', totalScore: 33 },
  'climber5': { name: 'Eve', totalScore: 40 },
  'climber6': { name: 'Frank', totalScore: 80 },
  'climber7': { name: 'Grace', totalScore: 100 },
  'climber8': { name: 'Hank', totalScore: 0 },
  'climber9': { name: 'Ivy', totalScore: 10 },
  'climber10': { name: 'Jacky', totalScore: 15 }
};
// Store the climbers data
await kv.set(climbersKey, JSON.stringify(climbers));

export async function getAllClimbersSorted(): Promise<Climber[]> {
  const climbersData: Deno.KvEntryMaybe<string> = await kv.get(climbersKey, { consistency: "strong" });
  if (!climbersData || climbersData.value === null) return [];

  const climbers: Record<string, Climber> = JSON.parse(climbersData.value);

  // Sort climbers by totalScore, from highest to lowest
  const sortedClimbers = Object.values(climbers).sort((a: Climber, b: Climber) => b.totalScore - a.totalScore);

  // Add 🥇, 🥈, and 🥉 badges to the top three climbers and numbers for the rest
  sortedClimbers.forEach((climber, index) => {
    if (index === 0) {
      climber.name = `🥇 ${climber.name}`;
    } else if (index === 1) {
      climber.name = `🥈 ${climber.name}`;
    } else if (index === 2) {
      climber.name = `🥉 ${climber.name}`;
    } 
  });
  
  return sortedClimbers;
}


// Function to retrieve climber data by climberId
export async function getClimber(climberId: string): Promise<Climber | null> {
  const climbersData: Deno.KvEntryMaybe<string> = await kv.get(climbersKey, { consistency: "strong" });
  if (!climbersData || climbersData.value === null) return null;
  const climbers: Record<string, Climber> = JSON.parse(climbersData.value);
  return climbers[climberId] || null;
}

// Function to update climber data by climberId and newTotalScore
export async function updateClimberData(climberId: string, newTotalScore: number): Promise<Climber | null> {
  const climbersData: Deno.KvEntryMaybe<string> = await kv.get(climbersKey, { consistency: "strong" });
  if (!climbersData || climbersData.value === null) return null;
  
  const climbers: Record<string, Climber> = JSON.parse(climbersData.value);
  const climber = climbers[climberId];
  if (!climber) return null;

  climber.totalScore = newTotalScore;
  
  await kv.set(climbersKey, JSON.stringify(climbers));
  
  return climber;
}


