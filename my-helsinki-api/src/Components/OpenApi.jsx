import React, { useState, useEffect } from "react";
import axios from "axios";
import PlaceList from "./PlaceList";


const OpenApi = () => {
  const api = "http://localhost:8000";
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
      <h1>Hello, Helsinki!</h1>
      <PlaceList 
      places = {places}
      />

  
    </div>
  );
};

export default OpenApi;
