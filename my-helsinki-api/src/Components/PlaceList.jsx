import * as React from "react";
import Box from "@mui/material/Box";
import { useState } from "react";
import Pagination from "./Pagination";
import CardPlace from "./CardPlace";


const PlaceList = ({ places }) => {
  const [currentPage, setCurrentPage] = useState(1);
  // No of Records to be displayed on each page
  const [recordsPerPage] = useState(80);
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  // Records to be displayed on the current page
  const currentRecords = places.data.slice(
    indexOfFirstRecord,
    indexOfLastRecord
  );
  const nPages = Math.ceil(places.data.length / recordsPerPage);


  return (
    <div>
      <div style={{ display: "flex", listStyleType: "none"}}>
        <Pagination
          nPages={nPages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          "& > :not(style)": {
            m: 1,
            // width: 128,
            // height: 128,
          },
        }}
      >
        {currentRecords &&
          currentRecords.map((place) => (
            <CardPlace place={place} key={place.id} />
          ))}
      </Box>
    </div>
  );
};

export default PlaceList;
