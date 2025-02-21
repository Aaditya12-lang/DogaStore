import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

// Register chart elements
ChartJS.register(ArcElement, Tooltip, Legend);

const StorageUsage = ({ used, total }) => {
  const available = total - used;
  const usedPercentage = (used / total) * 100;

  // Chart data
  const data = {
    // labels: ["Used", "Available"],
    datasets: [
      {
        data: [used, available],
        backgroundColor: ["#6665ce",'white'], // Used and available colors
        hoverBackgroundColor: ["#6665ce", "white"],
        borderWidth: 0, // Remove border around segments
        borderRadius:[20],
        cutout: "80%", // Make the inner circle size dynamic
      },
    ],
  };

  // Chart options
  const options = {
    plugins: {
      tooltip: {
        enabled: false, // Disable tooltips
      },
    },
    responsive: true,
    maintainAspectRatio: false, // Prevent fixed aspect ratio
  };

  return (
    <div className="">
      {/* Chart Container */}
      <div className='h-52 w-52 relative' style={{display:'flex',flexDirection:'column',justifyContainer:'center',alignItems:'center'}}>
        <Doughnut data={data} options={options} />
    {/* Text inside the circle */}
        <div className="absolute top-1/2 font-bold flex-column items-center">
  <div>{`${available} GB`}</div>
 <div>Available</div>
        </div>
      </div>
      {/*Below info*/}
      <div className="flex justify-between my-4 items-center">
        {/* total storage */}
        <div>
        <p className="text-xl font-semibold">Total</p>
        <p className="text-lg font-medium">{total+' GB'}</p>
        </div>
        {/* used storage */}
        <div>
        <p className="text-xl font-semibold">Used</p>
        <p className="text-lg font-medium">{used+' GB'}</p>
        </div>
      </div>
    </div>
  );
};

export default StorageUsage;