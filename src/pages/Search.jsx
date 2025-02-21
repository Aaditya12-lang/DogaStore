import React from "react";
import { Input } from "@/components/ui/input";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
function Search() {
  const navigate = useNavigate();
  return (
    <>
      <div className="mr-4 ml-4 mt-6">
        <div className="upper flex items-center">
          <ArrowLeft
            className="font-bold"
            size={30}
            onClick={() => {
              navigate("/");
            }}
          />
          <p className="text-2xl font-bold ml-8">Search</p>
        </div>
        <Input type="text" placeholder="Username" className="mt-8 py-6" />

        {/* viewing box */}
        <div className="viewbox w-full h-[600px] bg-red-500 mt-8">s</div>
      </div>
    </>
  );
}

export default Search;
