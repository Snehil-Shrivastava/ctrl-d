import { Bell, House, Settings } from "lucide-react";

const BottomNav = () => {
  return (
    <div className="projects-container-gradient py-3 backdrop-blur-md px-10 rounded-xl flex justify-between items-center font-cal-sans">
      <div className="flex gap-2.5 items-center">
        <House />
        <span className="text-lg">Home</span>
      </div>
      <div className="flex items-center gap-10 text-lg">
        <div className="flex gap-2.5 items-center">
          <Bell />
          <span>Notifications</span>
        </div>
        <div className="flex gap-2.5 items-center">
          <Settings />
          <span>Settings</span>
        </div>
      </div>
    </div>
  );
};

export default BottomNav;
