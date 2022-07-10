import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { client } from "../client";
import { feedQuery, searchQuery } from "../utils/data";
import MasonryLayout from "./MasonryLayout";
import Spinner from "./Spinner";

const Feed = () => {
  const [loading, setLoading] = useState(false);
  const { categogyId } = useParams();
  const [pins, setPins] = useState(null);

  useEffect(() => {
    setLoading(true);
    if (categogyId) {
      const query = searchQuery(categogyId);
      client
        .fetch(query)
        .then((data) => {
          setPins(data);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      client
        .fetch(feedQuery)
        .then((data) => {
          console.log("data feed", data);
          setPins(data);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [categogyId]);

  console.log("pins", pins);
  if (loading) {
    return <Spinner message="We are addking new ideas to your feed!" />;
  }
  return <div>{pins && <MasonryLayout pins={pins} />}</div>;
};

export default Feed;
