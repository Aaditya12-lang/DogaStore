
import {
  LayoutDashboard,
  Search,
  Bell,
  User,
  Users,
  PhoneCall,
  ScanQrCode,
  CloudUpload,
  CloudCog, 
  History,
  CloudUploadIcon
} from "lucide-react";
import { useNavigate } from "react-router-dom";

function BottomBar() {
  const navigate = useNavigate();

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-slate-800 text-white shadow-lg rounded-t-lg max-w-screen-md">
      <div className="flex justify-around items-center py-2">
        {/* Home Icon */}
        <button className="flex flex-col items-center focus:text-[#FAA307]">
          <CloudCog className="w-6 h-6" />
          <span className="text-sm mt-1">Dashboard</span>
        </button>

        {/* Upload Icon */}
        <button
          className="flex flex-col items-center active:text-[#FAA307]"
          aria-label="Search"
          onClick={()=>{navigate('/upload')}}
        >
          <CloudUpload className="w-6 h-6" />
          <span className="text-sm mt-1">Upload</span>
        </button>

        {/* History Icon */}
        <button className="flex flex-col items-center focus:text-[#FAA307]" onClick={()=>{navigate('/history')}}>
          <History className="w-6 h-6" />
          <span className="text-sm mt-1">History</span>
        </button>

        {/* Account Icon */}
        <button className="flex flex-col items-center focus:text-[#FAA307]" onClick={()=>{navigate('/profile')}}>
          <User className="w-6 h-6" />
          <span className="text-sm mt-1">Profile</span>
        </button>
      </div>
    </div>
  );
}

export default BottomBar;
