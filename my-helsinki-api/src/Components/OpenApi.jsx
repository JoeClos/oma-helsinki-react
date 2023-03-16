import React, { useState, useEffect } from "react";
import axios from "axios";
import PlaceList from "./PlaceList";
import { api } from "../config";
import Navbar from "./Navbar";

const OpenApi = () => {
  const [places, setPlaces] = useState({ data: [] });

  useEffect(() => {
    const apiPlaces = api + "/v2/places";
    axios
      .get(apiPlaces)
      .then((response) => {
        setPlaces(response.data);
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div style={{ padding: "1rem" }}>
      <Navbar />
      <PlaceList places={places} />
    </div>
  );
};

export default OpenApi;
