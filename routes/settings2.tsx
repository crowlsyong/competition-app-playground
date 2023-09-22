import { Handlers, PageProps } from "$fresh/server.ts";
import { getAllClimbers } from "🛠️/db.ts";
import Footer from "../components/Footer.tsx"; // Import the Footer component

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
    const results = allClimbers.filter((name) =>
      name.toLowerCase().includes(query.toLowerCase())
    );

    return ctx.render({ results, query });
  },
};

export default function Page({ data }: PageProps<Data>) {
  const { results, query } = data;
  return (
    <div class="px-4 py-8 mx-auto bg-white">
      <div class="max-w-screen-md mx-auto flex flex-col items-left gap-4 justify-center">
        <h1 className="text-3xl font-bold">Search</h1>
        <form className="max-w-screen-md w-full">
          <div className="flex gap-2"> {/* Added a flex container for input and button */}
            <input
              type="text"
              name="q"
              value={query}
              placeholder="Search" 
              className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline-none"
            />
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none"
            >
              Search
            </button>
          </div>
        </form>
        <ul>
          {results.map((name) => (
            <li className="text-lg" key={name}>{name}</li>
          ))}
        </ul>

        <Footer role={"judge" as "judge" | "athlete" | "admin"} />{" "}

      </div>
    </div>
  );
}
