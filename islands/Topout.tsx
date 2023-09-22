import { h } from "preact";
import { useState } from "preact/hooks";

interface TopoutProps {
  onYes: () => void;
  onNo: () => void;
  setActive: (active: boolean) => void; // Include setActive prop
}

export default function Topout({ onYes, onNo, setActive }: TopoutProps) {
  const [active, setActiveState] = useState(false);

  const handleToggle = () => {
    setActiveState(!active);
    if (active) {
      onNo();
    } else {
      onYes();
    }
  };

  return (
    <div className="flex justify-between items-center py-6">
      <p className="text-gray-700 text-sm font-bold">Topout?</p>
      <div
        className={`${
          active ? "bg-green-500" : "bg-red-500"
        } w-12 h-6 rounded-full flex items-center cursor-pointer`}
        onClick={handleToggle}
      >
        <div
          className={`${
            active ? "translate-x-6" : "translate-x-0"
          } w-6 h-6 rounded-full bg-white transform transition-transform duration-300 ease-in-out`}
        ></div>
      </div>
    </div>
  );
}
