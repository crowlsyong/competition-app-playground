import { useState } from "preact/hooks";
import { useSignal } from "@preact/signals";
import Counter from "../islands/Counter.tsx";
import Footer from "../components/Footer.tsx"; // Make sure to use the unified Footer component
import Header from "../components/Header.tsx"

export default function ScanQR() {
  const [role, setRole] = useState("judge");
  const count = useSignal(3);

  return (
    <>
      <Header />
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
          <div class="my-4">
            <label>
              <input type="radio" name="role" value="athlete" checked={role === "athlete"} onChange={() => setRole("athlete")} /> 
              Athlete
            </label>
            <label>
              <input type="radio" name="role" value="judge" checked={role === "judge"} onChange={() => setRole("judge")} /> 
              Judge
            </label>
            <label>
              <input type="radio" name="role" value="admin" checked={role === "admin"} onChange={() => setRole("admin")} /> 
              Admin
            </label>
          </div>
          <Counter count={count} />
          <Footer role={role} />
        </div>
      </div>
    </>
  );
}
