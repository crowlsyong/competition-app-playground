import { useEffect, useState } from "preact/hooks";
import { useSignal } from "@preact/signals";
import Counter from "../islands/Counter.tsx";
import Footer from "../components/Footer.tsx";

export default function Admin() {
  const [role, setRole] = useState<"judge" | "athlete" | "admin">("admin");
  const count = useSignal(0);

  return (
    <div class="px-4 py-8 mx-auto bg-[#86efac]">
      <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
        <img
          class="my-6"
          src="/logo.svg"
          width="128"
          height="128"
          alt="the Fresh logo: a sliced lemon dripping with juice"
        />
        <h1 class="text-4xl font-bold">Welcome to Fresh</h1>
        <p class="my-4">
          Try updating this message in the
          <code class="mx-2">./routes/index.tsx</code> file, and refresh.
        </p>
        <Counter count={count} />
        <Footer role={role as "judge" | "athlete" | "admin"} />
      </div>
    </div>
  );
}
