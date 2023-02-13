import * as React from "react";
import Box from "@mui/material/Box";
import { useState } from "react";
import Pagination from "./Pagination";
import CardPlace from "./CardPlace";


const PlaceList = ({ places }) => {
  // const [expanded, setExpanded] = useState(false);
  // User is currently on this page
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
            // <Card key={place.id} sx={{ maxWidth: 345 }}>
            //   <CardHeader
            //     avatar={
            //       <Avatar sx={{ bgcolor: green[500] }} aria-label="recipe">
            //         {place.name.fi.charAt(0)}
            //       </Avatar>
            //     }
            //     title={place.name.en}
            //     subheader={
            //       <a
            //         href={place.info_url}
            //         target="_blank"
            //         rel="noreferrer"
            //         style={{ textDecoration: "none" }}
            //       >
            //         Link
            //       </a>
            //     }
            //   />

            //   <CardContent>
            //     <Typography variant="body2" color="text.secondary">
            //       {place.description.intro}
            //     </Typography>
            //   </CardContent>
            //   <CardActions disableSpacing>
            //     <IconButton aria-label="add to favorites">
            //       <FavoriteIcon />
            //     </IconButton>
            //     <IconButton aria-label="share">
            //       <ShareIcon />
            //     </IconButton>
            //     <ExpandMore
            //       expand={expanded}
            //       onClick={handleExpandClick}
            //       aria-expanded={expanded}
            //       aria-label="show more"
            //     >
            //       <ExpandMoreIcon />
            //     </ExpandMore>
            //   </CardActions>
            //   <Collapse in={expanded} timeout="auto" unmountOnExit>
            //     <CardContent>
            //       {place.description.images.map((img, index) => (
            //         <CardMedia
            //           key={index}
            //           component="img"
            //           height="194"
            //           image={img.url}
            //           alt="Place description"
            //           style={{ padding: "5px" }}
            //         />
            //       ))}
            //       <Typography paragraph>
            //         Address:
            //         {place.description.body}
            //       </Typography>
            //       <Typography>
            //         {place.location.address.street_address}
            //       </Typography>
            //       <Typography>{place.location.address.postal_code}</Typography>
            //       <Typography>{place.location.address.locality}</Typography>
            //     </CardContent>
            //   </Collapse>
            //   <Collapse out={expanded}></Collapse>
            // </Card>
            <CardPlace place={place} key={place.id} />
          ))}
      </Box>
    </div>
  );
};

export default PlaceList;
