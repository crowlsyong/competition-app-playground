import { JSX } from 'preact';
import Counter from "../islands/Counter.tsx";
import Topout from "../islands/Topout.tsx";
import { Signal } from "@preact/signals";
import { useEffect, useState } from "preact/hooks";
import { getAllClimbers, getAllRoutes } from "🛠️/db.ts"; // Import new getAllRoutes function if needed

interface JudgeFormProps {
  onSubmit: (formData: FormData) => Promise<void>;
  isFormActive: boolean;
  onTopoutYes: () => void;
  onTopoutNo: () => void;
  counterValue: number;
  topout: boolean;
  count: Signal<number>;
  setIsFormActive: (active: boolean) => void;
}

export default function JudgeForm({
  onSubmit,
  isFormActive,
  onTopoutYes,
  onTopoutNo,
  counterValue,
  topout,
  count,
  setIsFormActive,
}: JudgeFormProps) {
  const [climberID, setClimberID] = useState("");
  const [routeID, setRouteID] = useState("");
  const [verificationStatusClimber, setVerificationStatusClimber] = useState("🚫");
  const [verificationStatusRoute, setVerificationStatusRoute] = useState("🚫");

  let debounceTimeoutClimber: number;
  let debounceTimeoutRoute: number;

  const checkClimberID = async (id: string) => {
    const allClimbers = await getAllClimbers();
    if (allClimbers.includes(id)) {
      setVerificationStatusClimber("✅");
    } else {
      setVerificationStatusClimber("🚫");
    }
  };
  
  const checkRouteID = async (id: string) => {
    const allRoutes = await getAllRoutes();
    if (allRoutes.includes(id)) {
      setVerificationStatusRoute("✅");
    } else {
      setVerificationStatusRoute("🚫");
    }
  };
  
  

  useEffect(() => {
    debounceTimeoutClimber = setTimeout(() => {
      checkClimberID(climberID);
    }, 1000);

    return () => {
      clearTimeout(debounceTimeoutClimber);
    };
  }, [climberID]);

  useEffect(() => {
    debounceTimeoutRoute = setTimeout(() => {
      checkRouteID(routeID);
    }, 1000);

    return () => {
      clearTimeout(debounceTimeoutRoute);
    };
  }, [routeID]);

  const handleSubmit = async (e: JSX.TargetedEvent<HTMLFormElement, Event>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    await onSubmit(formData);
  };

  return (
    <form class="w-full max-w-lg mb-2" method="POST" onSubmit={handleSubmit}>
      <div class="mb-4 relative flex items-center">
        <span class="pr-2">{verificationStatusClimber}</span>
        <input
          class="appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline focus:shadow-outline"
          id="climberId"
          name="climberId"
          type="text"
          placeholder="Climber ID"
          required
          value={climberID}
          onInput={(e) => setClimberID(e.currentTarget.value)}
        />
      </div>
      <div class="mb-4 relative flex items-center">
        <span class="pr-2">{verificationStatusRoute}</span>
        <input
          class="appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline focus:shadow-outline"
          id="routeID"
          name="routeID"
          type="text"
          placeholder="Route ID"
          required
          value={routeID}
          onInput={(e) => setRouteID(e.currentTarget.value)}
        />
      </div>
      <input type="hidden" name="counterValue" value={counterValue} />
      <input type="hidden" name="topout" value={topout ? "true" : "false"} />
      <Counter count={count} />
      <Topout onYes={onTopoutYes} onNo={onTopoutNo} setActive={setIsFormActive} />
      <div class="flex justify-between items-center py-4">
        <span class="text-gray-700 text-sm font-bold">+90 of 120 points</span>
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline focus:shadow-outline"
          type="submit"
          disabled={!isFormActive}
        >
          Submit
        </button>
      </div>
    </form>
  );
}
