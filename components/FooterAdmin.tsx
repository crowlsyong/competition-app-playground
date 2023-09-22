import { ComponentChildren } from "preact";
import IconUserStar from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/user-star.tsx"
import IconScale from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/scale.tsx";
import IconTrophy from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/trophy.tsx";
import IconQrcode from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/qrcode.tsx";
import IconSettings from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/settings.tsx";

type Props = {
  children: ComponentChildren;
};

export default function FooterAdmin({ children }: Props) {
  return (
    <div style={{
      position: "fixed",
      bottom: 0,
      left: 0,
      width: "100%",
      display: "flex",
      justifyContent: "space-around",
      backgroundColor: "Black",
      padding: "10px",
      boxShadow: "0px -1px 5px rgba(0, 0, 0, 0.1)",
      zIndex: 1000,
    }}>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: "white" }}>
        <IconUserStar style={{ fontSize: "24px", color: "white" }} />
        <div>Admin</div>
      </div>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: "white" }}>
        <IconScale style={{ fontSize: "24px", color: "white" }} />
        <div>Judge</div>
      </div>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: "white" }}>
        <IconTrophy style={{ fontSize: "24px", color: "white" }} />
        <div>Leaderboard</div>
      </div>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: "white" }}>
        <IconQrcode style={{ fontSize: "24px", color: "white" }} />
        <div>Scan QR</div>
      </div>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: "white" }}>
        <IconSettings style={{ fontSize: "24px", color: "white" }} />
        <div>Settings</div>
      </div>
    </div>
  );
}
