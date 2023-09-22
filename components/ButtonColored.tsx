import { JSX } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";
import IconPlus from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/plus.tsx";
import IconMinus from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/minus.tsx";

interface ButtonColoredProps extends JSX.HTMLAttributes<HTMLButtonElement> {
  color: "green" | "red";
}

export function ButtonColored(props: ButtonColoredProps) {
  const handleClick = (event: JSX.TargetedMouseEvent<HTMLButtonElement>) => { // Type changed here
    event.preventDefault();
    if (props.onClick) {
      props.onClick(event);
    }
  };

  const colorClass = props.color === "green" ? "bg-green-500 hover:bg-green-400" : "bg-red-500 hover:bg-red-400";
  const Icon = props.color === "green" ? IconPlus : IconMinus;

  return (
    <button
      {...props}
      onClick={handleClick}
      disabled={!IS_BROWSER || props.disabled}
      class={`w-10 h-10 flex items-center justify-center rounded-full ${colorClass} border-none transition-colors`}
    >
      {props.children === (props.color === "green" ? "+1" : "-1") ? <Icon class="w-5 h-5" color="white" /> : props.children}
    </button>
  );
}
