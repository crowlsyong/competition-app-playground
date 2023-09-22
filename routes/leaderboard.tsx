import { Handlers, PageProps } from "$fresh/server.ts";
import { getAllClimbersSorted } from "🛠️/db.ts";
import Footer from "../components/Footer.tsx"; // Import the Footer component

interface Data {
  climbers: {
    name: string;
    totalScore: number;
  }[];
}

export const handler: Handlers<Data> = {
  async GET(req, ctx) {
    // Fetch sorted climbers from the database
    const climbers = await getAllClimbersSorted();
    return ctx.render({ climbers });
  },
};

export default function LeaderboardPage({ data }: PageProps<Data>) {
  const { climbers } = data;
  return (
    <div className="px-4 py-8 mx-auto bg-white">
      <div className="max-w-screen-md mx-auto">
        <h1 className="text-3xl font-bold mb-4">Leaderboard</h1>
        
        <div className="grid grid-cols-1 gap-2">
          
          {climbers.map((climber, index) => (
            <div
              key={index}
              className="p-4 border-b border-gray-300 flex items-center justify-between"
            >
              <span className="text-lg font-semibold">
                {index >= 3
                  ? <span className="text-gray-400">{index + 1} </span>
                  : ""}
                {climber.name}
              </span>
              <span className="text-lg font-semibold">
                {climber.totalScore}
              </span>
            </div>
          ))}
        </div>

        <Footer role={"judge" as "judge" | "athlete" | "admin"} />{" "}
        {/* Add the Footer here */}
      </div>
    </div>
  );
}
