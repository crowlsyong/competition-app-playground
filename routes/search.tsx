import { Handlers, PageProps } from "$fresh/server.ts";
import { getAllClimbers } from "🛠️/db.ts";

interface Data {
  results: string[];
  query: string;
}

export const handler: Handlers<Data> = {
  async GET(req, ctx) {
    const url = new URL(req.url);
    const query = url.searchParams.get("q") || "";
    
    // Fetch names from the database
    const allClimbers = await getAllClimbers();
    
    // Filter based on the query
    const results = allClimbers.filter((name) => name.toLowerCase().includes(query.toLowerCase()));

    return ctx.render({ results, query });
  },
};

export default function Page({ data }: PageProps<Data>) {
  const { results, query } = data;
  return (
    <div>
      <form>
        <input type="text" name="q" value={query} />
        <button type="submit">Search</button>
      </form>
      <ul>
        {results.map((name) => <li key={name}>{name}</li>)}
      </ul>
    </div>
  );
}
