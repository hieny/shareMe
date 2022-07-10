import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Navbar, Feed, PinDetail, Search, CreatePin } from "../components";

const Pins = ({ user }) => {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div className="px-2 md:px-5">
      <div className="bg-gray-50">
        <Navbar
          searchTerm={searchTerm}
          user={user}
          setSearchTerm={setSearchTerm}
          className=""
        />
      </div>
      <div className="h-full-width">
        <Routes>
          <Route path="/" element={<Feed />}></Route>
          <Route path="/category:categoryId" element={<Feed />}></Route>
          <Route
            path="/pin-detail/:pinId"
            element={<PinDetail user={user} />}
          ></Route>
          <Route path="/create-pin" element={<CreatePin user={user} />}></Route>
          <Route
            path="/search"
            element={<Search setSearchTerm={searchTerm} user={user} />}
          ></Route>
        </Routes>
      </div>
    </div>
  );
};

export default Pins;
