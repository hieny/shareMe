import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoMdAdd, IoMdSearch } from "react-icons/io";

const Navbar = ({ searchTerm, setSearchTerm, user }) => {
  const navigate = useNavigate();
  if (!user) return null;
  return (
    <div className="flex gap-2 md:gap-5 w-full mt-5 pb-7">
      <div className="flex w-full justify-start items-center rounded-md bg-white border-none outline-none focus-within:shadow-sm">
        <IoMdSearch fontSize={21} className="ml-1" />
        <input
          type="text"
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
          placeholder="Search"
          value={searchTerm}
          onFocus={() => {
            navigate("/search");
          }}
          className="p-2 w-full bg-white outline-none"
        ></input>
      </div>
      <div className="flex gap-3">
        <Link to={`user-profile/${user?._id}`} className="hidden md:block">
          <img
            src={user.image}
            alt="user-img"
            className="w-14 h-12 rounded-lg"
          />
        </Link>
        <Link
          to="create-pin"
          className="bg-black text-white w-9 h-9 rounded-lg flex items-center justify-center text-dark text-xl opacity-75 hover:opacity-100 hover:shadow-md outline-none mt-2"
        >
          <IoMdAdd className="w-11 h-6 items-center" />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
