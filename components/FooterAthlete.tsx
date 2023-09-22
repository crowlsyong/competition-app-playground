import { ComponentChildren } from "preact";
import IconUser from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/user.tsx"
import IconTrophy from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/trophy.tsx";
import IconQrcode from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/qrcode.tsx";
import IconSettings from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/settings.tsx";

type Props = {
  children: ComponentChildren;
};

export default function FooterAthlete({ children }: Props) {
  return (
    <div style={{
      position: "fixed",
      bottom: 0,
      left: 0,
      width: "100%",
      display: "flex",
      justifyContent: "space-around",
      backgroundColor: "RoyalBlue	",
      padding: "10px",
      boxShadow: "0px -1px 5px rgba(0, 0, 0, 0.1)",
      zIndex: 1000,
    }}>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: "white" }}>
        <IconUser style={{ fontSize: "24px", color: "white" }} />
        <div>My Comp</div>
      </div>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: "white" }}>
        <IconTrophy style={{ fontSize: "24px", color: "white" }} />
        <div>Leaderboard</div>
      </div>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: "white" }}>
        <IconQrcode style={{ fontSize: "24px", color: "white" }} />
        <div>View QR</div>
      </div>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: "white" }}>
        <IconSettings style={{ fontSize: "24px", color: "white" }} />
        <div>Settings</div>
      </div>
    </div>
  );
}
