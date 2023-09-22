import type { Signal } from "@preact/signals";
import { ButtonColored } from "../components/ButtonColored.tsx";  // Import the new ButtonColored component

interface CounterProps {
  count: Signal<number>;
}

export default function Counter(props: CounterProps) {
  return (
    <div class="flex justify-between items-center py-6">
      <p class="text-gray-700 text-sm font-bold"># of attempts</p>
      <div class="flex items-center gap-4">
        <p class="text-xl">{`${props.count.value}/3`}</p>
        <ButtonColored color="red" onClick={() => { if (props.count.value > 0) props.count.value -= 1; }}>-1</ButtonColored>
        <ButtonColored color="green" onClick={() => props.count.value += 1}>+1</ButtonColored>
      </div>
    </div>
  );
}
