import React from "react";

const NavbarDropdowns = () => {
  const menuItems = [
    {
      title: "All",
      options: [],
    },
    {
      title: "Sell Phone",
      options: ["Option 1", "Option 2", "Option 3"],
    },
    {
      title: "Sell Gadgets",
      options: ["Option A", "Option B"],
    },
    {
      title: "Buy Phone",
      options: ["Phone A", "Phone B", "Phone C"],
    },
    {
      title: "Find New Gadget",
      options: ["Gadget 1", "Gadget 2"],
    },
    {
      title: "Buy Laptop",
      options: ["Laptop A", "Laptop B"],
    },
    {
      title: "Cashify Store",
      options: [],
    },
    {
      title: "More",
      options: ["Extra 1", "Extra 2", "Extra 3"],
    },
  ];

  return (
    <nav className="w-full absolute left-0 z-50 mt-12 flex justify-center bg-white border-b-2">
      {menuItems.map((item, index) => (
        <div key={index} className="relative group mx-4 mb-4">
          {/* Main Dropdown Button */}
          <button className="flex items-center px-4 text-sm/7 font-mid-bold hover:text-green-og transition-colors duration-300">
            {item.title}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-4 h-4 ml-2 group-hover:rotate-180 transition-transform duration-300"
            >
              <path
                fillRule="evenodd"
                d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          {/* Dropdown Menu */}
          {item.options.length > 0 && (
            <div className="absolute left-0 mt-2 bg-white border rounded-lg shadow-lg hidden group-hover:block">
              {/* Title */}
              <div className="px-4 py-2 font-bold text-gray-700 hover:bg-input-bg1">
                {item.title}
              </div>
              {/* Options */}
              {item.options.map((option, idx) => (
                <div key={idx} className="relative group">
                  <button className="flex items-center px-4 py-2 text-sm text-gray-700 w-full text-left hover:bg-input-bg1 hover:text-green-og transition-colors duration-300">
                    {option}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-4 h-4 ml-auto group-hover:rotate-180 transition-transform duration-300"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                  {/* Submenu (if needed) */}
                  {/* Uncomment if sub-options exist */}
                  {/* <div className="absolute left-full top-0 mt-2 ml-2 bg-white border rounded-lg shadow-lg hidden group-hover:block">
                    <div className="px-4 py-2 text-sm text-gray-700">Sub-option 1</div>
                  </div> */}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </nav>
  );
};

export default NavbarDropdowns;
