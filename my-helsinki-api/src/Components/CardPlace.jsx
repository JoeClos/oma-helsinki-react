import { useState } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import { green } from "@mui/material/colors";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CardMedia from "@mui/material/CardMedia";
import { styled } from "@mui/material/styles";
import { Link} from "react-router-dom";



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
  

  const theme = createTheme();

  theme.typography.p = {
    fontSize: '1.4rem',
    '@media (min-width:600px)': {
      fontSize: '1.5rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '2rem',
    },
  };
  
const CardPlace = ({place}) => {
    const [expanded, setExpanded] = useState(false);
    const handleExpandClick = () => {
        if(expanded === false){
            setExpanded({
                zoom: true,
              });
      
        }else{
            setExpanded(false);
        }
      };
    

  return (
      <Card sx={{ maxWidth: 345 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: green[500] }} aria-label="recipe">
              {place.name.fi.charAt(0)}
            </Avatar>
          }
          titleTypographyProps={{
            fontSize: 15,
          }}
          subheaderTypographyProps={{
            fontSize: 13,
          }}
          title={place.name.en}
          style={{fontSize: "1rem"}}
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

        <CardContent>
          <ThemeProvider theme={theme}>
            <Typography variant="h5" color="text.secondary">
              {place.description.intro}
            </Typography>
          </ThemeProvider>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <Link to={`/place/${place.id}`}>More</Link>

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
            <Typography>{place.location.address.street_address}</Typography>
            <Typography>{place.location.address.postal_code}</Typography>
            <Typography>{place.location.address.locality}</Typography>
          </CardContent>
        </Collapse>
      </Card>
  );
};

export default CardPlace;
