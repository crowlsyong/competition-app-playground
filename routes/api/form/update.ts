import { Handlers } from "$fresh/server.ts";
// import your function to update climber data, assuming it's named `updateClimberData`
import { updateClimberData } from "🛠️/db.ts";

export const handler: Handlers = {
  async POST(req) {
    const body = await req.json();
    const { climberId, totalScore } = body;

    if (!climberId || typeof totalScore !== 'number') {
      return new Response("Invalid request body", { status: 400 });
    }

    await updateClimberData(climberId, totalScore);

    return new Response("Climber updated successfully", {
      headers: {
        "Content-Type": "text/plain",
      },
    });
  },
};
