import IconUser from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/user.tsx";
import IconTrophy from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/trophy.tsx";
import IconQrcode from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/qrcode.tsx";
import IconSettings from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/settings.tsx";
import IconScale from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/scale.tsx";
import IconUserStar from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/user-star.tsx";

type Props = {
  role: "athlete" | "judge" | "admin";
};

export default function Footer({ role }: Props) {
  const backgroundColors = {
    athlete: "RoyalBlue",
    judge: "DarkSlateBlue",
    admin: "Black",
  };
  

  const icons = {
    athlete: [IconUser, IconTrophy, IconQrcode, IconSettings],
    judge: [IconScale, IconTrophy, IconQrcode, IconSettings],
    admin: [IconUserStar, IconScale, IconTrophy, IconQrcode, IconSettings],
  };
  
  const texts = {
    athlete: ["My Comp", "Leaderboard", "View QR", "Settings"],
    judge: ["Judge", "Leaderboard", "Scan QR", "Settings"],
    admin: ["Admin", "Judge", "Leaderboard", "Scan QR", "Settings"],
  };

  return (
    <div style={{
      position: "fixed",
      bottom: 0,
      left: 0,
      width: "100%",
      display: "flex",
      justifyContent: "space-around",
      backgroundColor: backgroundColors[role],
      padding: "10px",
      boxShadow: "0px -1px 5px rgba(0, 0, 0, 0.1)",
      zIndex: 1000,
    }}>
      {icons[role].map((Icon, index) => (
        <a href={getLinkPath(role, index)} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: "white", textDecoration: "none" }}>
          <Icon style={{ fontSize: "24px", color: "white" }} />
          <div>{texts[role][index]}</div>
        </a>
      ))}
    </div>
  );
  
  function getLinkPath(role: "athlete" | "judge" | "admin", index: number) {
    const paths = {
      athlete: ["/my-comp", "/leaderboard", "/view-qr", "/settings"],
      judge: ["/judge", "/leaderboard", "/scan-qr", "/settings"],
      admin: ["/admin", "/judge", "/leaderboard", "/scan-qr", "/settings"],
    };
    
    return paths[role][index];
  }
}  
