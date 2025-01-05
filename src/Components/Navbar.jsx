import React from "react";

function Navbar() {
  return (
    <nav className="w-full fixed bg-white shadow-sm border-b-2 top-0 left-0 z-50">
      <div className="mx-28 my-2 px-4 py-2 flex justify-between items-center">
      <div className="flex items-center">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 128 38"
    className="h-6 sm:h-10 w-20 sm:w-32"
  >
    <g transform="translate(-320 -16)">
      <g transform="translate(320 16)">
        <path
          fill="#42c86b"
          d="m75.41 58.913-1.81 1.805-3.071 3.082a1.481 1.481 0 0 1-.825.454l-.043.017-.066.024h-.211l-.06-.019c-.015-.005-.035-.013-.05-.017a.069.069 0 0 1-.02-.01 1.371 1.371 0 0 1-.748-.39l-1.21-1.213c-.988-.99-2.012-2.011-3.012-3.02a1.9 1.9 0 0 1 1.253-3.249h.115a1.824 1.824 0 0 1 1.3.557c.41.4.818.814 1.224 1.22l1.309 1.31 5.348-5.35.213-.213c.157-.156.323-.318.48-.482a.491.491 0 0 0 .045-.042 9.266 9.266 0 1 0 2.283 3.092q-1.22 1.226-2.448 2.452"
          transform="translate(-50.807 -41.366)"
          style={{ fillRule: "evenodd" }}
        ></path>
        <path
          fill="#42c8b7"
          d="M49.219 56.725a21.422 21.422 0 0 1-14.047-5.039 17.841 17.841 0 0 1-6.207-12.046 19.667 19.667 0 0 1 3.905-13.574A18.472 18.472 0 0 1 44.719 19a22.244 22.244 0 0 1 3.439-.276 18.362 18.362 0 0 1 13.166 5.548 2.89 2.89 0 0 1 .849 2.871 3.084 3.084 0 0 1-2.907 2.171 3.567 3.567 0 0 1-2.383-1.169 13.235 13.235 0 0 0-9-3.562A13.161 13.161 0 0 0 38.78 47.2a13.193 13.193 0 0 0 9.143 3.687 13 13 0 0 0 8.777-3.416 3.929 3.929 0 0 1 2.555-1.32 2.727 2.727 0 0 1 .647.083 3.01 3.01 0 0 1 2.258 2.078 2.865 2.865 0 0 1-.809 2.85 17.986 17.986 0 0 1-12.136 5.562"
          transform="translate(-28.896 -18.725)"
          style={{ fillRule: "evenodd" }}
        ></path>
        <path
          fill="#42c8b7"
          d="M161.379 59.645 159.437 62a5.346 5.346 0 0 0-3.839-1.917 4.545 4.545 0 0 0 0 9.09 5.686 5.686 0 0 0 3.839-1.729l1.963 2.136a8.635 8.635 0 0 1-5.969 2.636 7.5 7.5 0 0 1-7.743-7.552c0-4.257 3.4-7.466 7.87-7.466a8.4 8.4 0 0 1 5.824 2.447"
          transform="translate(-112.141 -45.686)"
        ></path>
        <path
          fill="#42c8b7"
          d="m198.593 69.454-1.162 2.864h-3.438l6.415-14.76h3.439l6.3 14.76h-3.561l-1.163-2.864zm3.436-8.419-2.338 5.737h4.658z"
          transform="translate(-144.591 -45.938)"
        ></path>
        <path
          fill="#42c8b7"
          d="m261.028 58.66-1.283 2.76a10.343 10.343 0 0 0-4.6-1.515c-1.117 0-1.873.4-1.873 1.2 0 2.718 7.865 1.2 7.848 6.516 0 2.889-2.511 4.452-5.78 4.452a10.4 10.4 0 0 1-6.524-2.342l1.331-2.724a8.742 8.742 0 0 0 5.233 2.217c1.371 0 2.195-.506 2.195-1.414 0-2.784-7.871-1.159-7.871-6.394 0-2.674 2.3-4.363 5.72-4.363a10.529 10.529 0 0 1 5.608 1.6"
          transform="translate(-183.007 -45.587)"
        ></path>
        <path
          fill="#42c8b7"
          d="M307.765 72.317V66.5h-6.688v5.817h-3.33v-14.76h3.33v6.156h6.688v-6.156h3.335v14.76z"
          transform="translate(-217.299 -45.938)"
        ></path>
        <path
          fill="#42c8b7"
          transform="translate(95.775 11.62)"
          d="M0 0h3.239v14.734H0z"
        ></path>
        <path
          fill="#42c8b7"
          d="M366.287 72.291h3.24v-5.465h5.773v-3.245h-5.771V60.8h6.553v-3.243h-9.793z"
          transform="translate(-265.33 -45.938)"
        ></path>
        <path
          fill="#42c8b7"
          d="m413.764 57.557-3.745 5.743-3.8-5.745h-3.892l6.078 9.164v5.57h3.246v-5.571l5.984-9.161z"
          transform="translate(-290.587 -45.938)"
        ></path>
      </g>
    </g>
  </svg>
</div>

        {/* Logo */}

        {/* <div className="text-xl font-bold text-green-og">CASHIFY</div> */}

        {/* Search Input */}
        <div className="flex mx-8 w-full px-6 py-2 rounded-sm bg-input-bg1 space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="gray"
            class="w-5 h-5 text-surface-text mt-0.5 mx-1 flex-shrink-0"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            ></path>
          </svg>
          <input
            type="text"
            placeholder="Search for mobiles, accessories & More"
            className="w-full focus:outline-none bg-input-bg1"
          />
        </div>

        {/* Dropdown for Cities */}
        <div className="font-bold flex">
        <svg
          id="Group_34611"
          data-name="Group 34611"
          xmlns="http://www.w3.org/2000/svg"
          width="26"
          height="26"
          viewBox="0 0 26 26"
        >
          <g id="kolkata" transform="translate(6.335 4.027)">
            <path
              id="Path_2118"
              data-name="Path 2118"
              class="fill-none stroke-black"
              stroke-width="1.2px"
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M28.924,16.449C28.9,20.129,24.645,27.9,22.259,27.824c-2.55-.017-6.69-7.694-6.665-11.375a6.666,6.666,0,0,1,13.329,0Z"
              transform="translate(-15.595 -9.914)"
            ></path>
            <circle
              id="Ellipse_2919"
              data-name="Ellipse 2919"
              cx="3.792"
              cy="3.792"
              class="fill-primary stroke-black fill-green-og"
              stroke-width="1.2px"
              r="3.792"
              transform="translate(2.873 3.121)"
            ></circle>
          </g>
          <g id="Boundry">
            <rect
              id="Rectangle_621"
              data-name="Rectangle 621"
              width="26"
              class="fill-none"
              height="26"
            ></rect>
          </g>
        </svg>
        <div>
          <select className="focus:outline-none font-semibold">
            <option value="delhi">Delhi</option>
            <option value="mumbai">Mumbai</option>
            <option value="bangalore">Bangalore</option>
            <option value="chennai">Chennai</option>
          </select>
        </div>
        </div>

        {/* Button */}
        <div className="ml-4">
          <button className="px-10 py-1 bg-green-og text-white rounded-lg focus:outline-none ">
            Login
          </button>
        </div>
      </div>
      
      
      {/* Navigation Dropdowns */}
      {/* <div className="relative group">
  Main Dropdown Title
  <button className="px-4 py-2 text-sm font-semibold text-gray-700 bg-white border rounded-lg">
    Main Dropdown
  </button>

  Dropdown Content
  <div className="absolute  mt-2 hidden group-hover:block bg-white shadow-lg rounded-lg border">
    Title
    <div className=" font-bold text-gray-800">Title</div>

    Options with Nested Dropdown
    <div className="relative group">
      <button className="block text-sm text-gray-600 hover:bg-gray-100 w-full">
        Option 1
      </button>
      Nested Dropdown
      <div className="absolute left-full top-0 mt-0 ml-2 hidden group-hover:block bg-white shadow-lg rounded-lg border">
        <div className="px-4 py-2 font-bold text-gray-800">Nested Title</div>
        <button className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 w-full text-left">
          Sub Option 1
        </button>
        <button className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 w-full text-left">
          Sub Option 2
        </button>
      </div>
    </div>

    <button className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 w-full text-left">
      Option 2
    </button>
  </div>
</div> */}
{/* 
      <div className=" shadow-sm py-2">
        <div className="mx-28 flex justify-between items-center space-x-6">
          <select className="focus:outline-none px-4 py-2 text-sm font-semibold text-gray-700 bg-white border rounded-lg">
            <option>All</option>
          </select>
          <select className="focus:outline-none px-4 py-2 text-sm font-semibold text-gray-700 bg-white border rounded-lg">
            <option>Sell Phone</option>
            <option>Option 1</option>
            <option>Option 2</option>
          </select>
          <select className="focus:outline-none px-4 py-2 text-sm font-semibold text-gray-700 bg-white border rounded-lg">
            <option>Sell Gadgets</option>
          </select>
          <select className="focus:outline-none px-4 py-2 text-sm font-semibold text-gray-700 bg-white border rounded-lg">
            <option>Buy Phone</option>
          </select>
          <select className="focus:outline-none px-4 py-2 text-sm font-semibold text-gray-700 bg-white border rounded-lg">
            <option>Find New Gadget</option>
          </select>
          <select className="focus:outline-none px-4 py-2 text-sm font-semibold text-gray-700 bg-white border rounded-lg">
            <option>Buy Laptop</option>
          </select>
          <select className="focus:outline-none px-4 py-2 text-sm font-semibold text-gray-700 bg-white border rounded-lg">
            <option>Cashify Store</option>
          </select>
          <select className="focus:outline-none px-4 py-2 text-sm font-semibold text-gray-700 bg-white border rounded-lg">
            <option>More</option>
            <option>Option A</option>
            <option>Option B</option>
          </select>
        </div>
      </div> */}

      

    </nav>
  );
}

export default Navbar;
