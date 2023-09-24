// judge.tsx
import { useEffect, useState } from "preact/hooks";
import { useSignal } from "@preact/signals";
import Footer from "../components/Footer.tsx";
import JudgeForm from "🧱/JudgeForm.tsx";

export default function Judge() {
  const [role, setRole] = useState<"judge" | "athlete" | "admin">("judge");
  const count = useSignal(0);
  const [counterValue, setCounterValue] = useState<number>(count.value);
  const [topout, setTopout] = useState<boolean>(false);
  const [isFormActive, setIsFormActive] = useState<boolean>(false);

  useEffect(() => {
    setCounterValue(count.value);
  }, [count.value]);

  const handleTopoutYes = () => {
    setTopout(true);
  };

  const handleTopoutNo = () => {
    setTopout(false);
  };

  const handleSubmit = async (formData: FormData) => {
    // You can now directly use formData here
    await fetch("/api/store-form-fields", {
      method: "POST",
      body: JSON.stringify(Object.fromEntries(formData)),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  return (
    <div class="px-4 py-8 mx-auto bg-[#ede9fe]">
      <div class="max-w-screen-md mx-auto flex gap-4 flex-col items-left justify-center">
      <h1 className="text-3xl font-bold mb-2">Judge</h1>
      <div className="flex justify-between items-center p-4 bg-white border rounded-md">
      <div className="text-lg font-semibold text-gray-700">
        John Doe
      </div>
      <div className="text-lg font-semibold text-gray-700">
        2300 pts
      </div>
    </div>
        <JudgeForm
          onSubmit={handleSubmit}
          isFormActive={isFormActive}
          onTopoutYes={handleTopoutYes}
          onTopoutNo={handleTopoutNo}
          counterValue={counterValue} // Pass counterValue from local state
          count={count} // Pass the count as a Signal<number>
          topout={topout}
          setIsFormActive={setIsFormActive}
        />

        <Footer role={role as "judge" | "athlete" | "admin"} />
      </div>
    </div>
  );
}
