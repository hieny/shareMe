import React from "react";
import Masonry from "react-masonry-css";

import Pin from "./Pin";

const breakpointObj = {
  default: 4,
  30000: 6,
  20000: 5,
  1200: 3,
  1000: 2,
  500: 1,
};
const MasonryLayout = ({ pins }) => {
  console.log("pins MasonryLayout", pins);
  const renderPin = () => {
    return pins?.map((pin, index) => {
      console.log("pins MasonryLayout Pins", pin);
      return <Pin key={index} pin={pin} className="w-max" />;
    });
  };
  return (
    <Masonry className="flex animate-slide-fwd" breakpointCols={breakpointObj}>
      {renderPin()}
      {/* <Pin key={pins._id} pin={pins} className="w-max" />; */}
    </Masonry>
  );
};

export default MasonryLayout;
