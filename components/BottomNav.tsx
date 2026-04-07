// import { Bell, House, Settings } from "lucide-react";

// const BottomNav = () => {
//   return (
//     <div className="projects-container-gradient py-3 backdrop-blur-md px-10 rounded-xl flex justify-between items-center font-cal-sans">
//       <div className="flex gap-2.5 items-center">
//         <House />
//         <span className="text-lg">Home</span>
//       </div>
//       <div className="flex items-center gap-10 text-lg">
//         <div className="flex gap-2.5 items-center">
//           <Bell />
//           <span>Notifications</span>
//         </div>
//         <div className="flex gap-2.5 items-center">
//           <Settings />
//           <span>Settings</span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BottomNav;

// --------------------------------- TEST --------------------------------

"use client";

import { Bell, House, Settings } from "lucide-react";
import { useRouter, usePathname } from "next/navigation";

const BottomNav = () => {
  const router = useRouter();
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <div className="projects-container-gradient py-3 backdrop-blur-md px-10 rounded-xl flex justify-between items-center font-cal-sans">
      <button
        onClick={() => {
          if (!isHome) router.push("/");
        }}
        className={`flex gap-2.5 items-center transition-opacity ${
          isHome
            ? "cursor-default opacity-100"
            : "cursor-pointer hover:opacity-80"
        }`}
      >
        <House />
        <span className="text-lg">Home</span>
      </button>
      <div className="flex items-center gap-10 text-lg">
        <button
          className="flex gap-2.5 items-center opacity-50 cursor-not-allowed"
          disabled
          title="Coming soon"
        >
          <Bell />
          <span>Notifications</span>
        </button>
        <button
          className="flex gap-2.5 items-center opacity-50 cursor-not-allowed"
          disabled
          title="Coming soon"
        >
          <Settings />
          <span>Settings</span>
        </button>
      </div>
    </div>
  );
};

export default BottomNav;
