import { Handlers } from "$fresh/server.ts";
import { getClimber } from "🛠️/db.ts";

export const handler: Handlers = {
  async GET(req) {
    const query = new URLSearchParams(req.url);
    const climberId = query.get("climberId");

    if (!climberId) {
      return new Response("Missing climberId", { status: 400 });
    }

    const climberInfo = await getClimber(climberId);

    if (!climberInfo) {
      return new Response("Climber not found", { status: 404 });
    }

    return new Response(JSON.stringify(climberInfo), {
      headers: {
        "Content-Type": "application/json",
      },
    });
  },
};
