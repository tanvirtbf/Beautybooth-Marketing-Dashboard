import React from "react";

const Navbar = () => {
  return (
    <div className="pt-9 pb-5 flex justify-between">
      <div>
        <h2 className="font-semibold text-sm text-black">Dashboard</h2>
      </div>
      <div className="flex gap-4">
        <div className="border border-[#00000030] rounded-2xl font-medium text-sm text-textGray navBtnPadding">This Week</div>
        <div className="border border-[#00000030] rounded-2xl font-medium text-sm text-textGray navBtnPadding">This Month</div>
        <div className="border border-[#00000030] rounded-2xl font-medium text-sm text-textGray navBtnPadding flex gap-1 items-center">
          <div>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.5 8.33341V16.6667C2.5 16.8878 2.5878 17.0997 2.74408 17.256C2.90036 17.4123 3.11232 17.5001 3.33333 17.5001H16.6667C16.8877 17.5001 17.0996 17.4123 17.2559 17.256C17.4122 17.0997 17.5 16.8878 17.5 16.6667V8.33341M2.5 8.33341H17.5M2.5 8.33341V5.00008C2.5 4.77907 2.5878 4.56711 2.74408 4.41083C2.90036 4.25455 3.11232 4.16675 3.33333 4.16675H16.6667C16.8877 4.16675 17.0996 4.25455 17.2559 4.41083C17.4122 4.56711 17.5 4.77907 17.5 5.00008V8.33341"
                stroke="#222222"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M13.3334 2.5V5.83333M6.66675 2.5V5.83333"
                stroke="#222222"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div>Custom Date</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
