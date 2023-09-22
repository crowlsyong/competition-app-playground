import { useEffect, useState } from "preact/hooks";
import { getAllClimbersSorted } from "🛠️/db.ts";

interface Climber {
  name: string;
  totalScore: number;
}

export const Leaderboard = () => {
  const [climbers, setClimbers] = useState<Climber[]>([]);

  useEffect(() => {
    const fetchClimbers = async () => {
      const sortedClimbers = await getAllClimbersSorted();
      console.log('Sorted Climbers:', sortedClimbers);  // <-- Add this line
      setClimbers(sortedClimbers);
    };
  
    fetchClimbers();
  }, []);
  

  return (
    <div>
      <h1>Leaderboard</h1>
      <ul>
        {climbers.map((climber, index) => (
          <li key={index}>
            {climber.name} - {climber.totalScore}
          </li>
        ))}
      </ul>
    </div>
  );
};
