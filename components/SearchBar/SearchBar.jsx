import { useState } from "react";
import { FaMapMarkerAlt, FaHome } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

function SearchBar() {
  const [location, setLocation] = useState("");
  const [type, setType] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = () => {
    console.log({
      location,
      type,
      price,
    });
  };

  return (
    <section className="w-full flex justify-center px-5 -mt-16 relative z-20">
      <div className="bg-[#E8D7CA] rounded-3xl shadow-xl p-5 w-full max-w-6xl">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-5">


          <div className="bg-white rounded-xl px-5 py-4 flex items-center justify-between">

            <div className="flex items-center gap-5">

              <FaMapMarkerAlt />

              <input type="text"  placeholder="Location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="outline-none bg-transparent w-full"
              />
                

            </div>

          </div>

       

          <div className="bg-white rounded-xl px-5 py-4 flex items-center justify-between">

            <div className="flex items-center gap-5">

              <FaHome />

              <input type="text" placeholder="Type"
                value={type}
                onChange={(e) => setType(e.target.value)}
                className="outline-none bg-transparent w-full"
              />
            </div>

          </div>

          {/* Price */}

          <div className="bg-white rounded-xl px-5 py-4 flex items-center justify-between">

            <input
              type="text"
              placeholder="Price Range"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="outline-none w-full"
            />

          </div>
          <button
            onClick={handleSubmit}
            className="bg-[#2A170F] text-white rounded-xl font-semibold hover:bg-[#3E2418] transition"
          >
            Sign Up
          </button>

        </div>

      </div>
    </section>
  );
}

export default SearchBar;
