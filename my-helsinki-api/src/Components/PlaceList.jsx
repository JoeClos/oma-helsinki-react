import * as React from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { green } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";
import CardMedia from "@mui/material/CardMedia";
import Pagination from "./Pagination";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const PlaceList = ({ places }) => {
  const [expanded, setExpanded] = useState(false);
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

  const handleExpandClick = (id) => {
    setExpanded({
      zoom: true,
      selectedCard: id,
    });
  };

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
            <Card key={place.id} sx={{ maxWidth: 345 }}>
              <CardHeader
                avatar={
                  <Avatar sx={{ bgcolor: green[500] }} aria-label="recipe">
                    {place.name.fi.charAt(0)}
                  </Avatar>
                }
                title={place.name.en}
                subheader={
                  <a
                    href={place.info_url}
                    target="_blank"
                    rel="noreferrer"
                    style={{ textDecoration: "none" }}
                  >
                    Link
                  </a>
                }
              />

              {/* {place.description.images.map((img, index) => (
                
              <CardMedia
                  key={index}
                  component="img"
                  height="194"
                  image={img.url}
                  alt="Place description"
                />
              ))} */}
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {place.description.intro}
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
                <ExpandMore
                  expand={expanded}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </ExpandMore>
              </CardActions>
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                  {place.description.images.map((img, index) => (
                    <CardMedia
                      key={index}
                      component="img"
                      height="194"
                      image={img.url}
                      alt="Place description"
                      style={{ padding: "5px" }}
                    />
                  ))}
                  <Typography paragraph>
                    Address:
                    {place.description.body}
                  </Typography>
                  <Typography>
                    {place.location.address.street_address}
                  </Typography>
                  <Typography>{place.location.address.postal_code}</Typography>
                  <Typography>{place.location.address.locality}</Typography>
                </CardContent>
              </Collapse>
              <Collapse out={expanded}></Collapse>
            </Card>
          ))}
      </Box>
    </div>
  );
};

export default PlaceList;
