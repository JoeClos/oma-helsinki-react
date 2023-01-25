import { Link} from "react-router-dom";

const Place = ({ place }) => {
  console.log(place)
  return (
    <div>
      {/* <h3 key={place.id}>{place.name.en}</h3>
      <a href={place.info_url} target="_blank" rel="noopener noreferrer">
        <p>{place.info_url}</p>
      </a>
      <p>{place.description.intro}</p> */}
      <h1>Place details</h1>
      <div>
          <p>
            {place?.location.address.locality}
          </p>
      </div>
      {/* <h3 key={place?.name}>{place?.name.en}</h3>
      <p>{place?.description.body}</p>
      <p>
        <b>Address: </b>
        {place?.location?.address.street_address} <br />
        {place?.location.address.postal_code} <br />
        {place?.location.address.locality} <br />
        {place?.location.address.neighbourhood}
      </p> */}

      {/* Fetching photos */}
      {/* {place?.description.images.map((img) => (
        <div>
          <img src={img.url} style={{ maxWidth: "25rem" }} alt={img.url} />
          <p>&copy;{img.copyright_holder}. All Rights Reserved</p>
        </div>
      ))} */}
      {/* <h4>Tags:</h4>
      {place.tags.map((tag) => (
        <p>{tag.name}</p>
      ))} */}
      {/* <a href={`http://localhost:8080/${place.id}`}
      >More</a> */}
      {/* <Link to={`/place/${place.id}`}>More</Link> */}
      <Link to={`/`} key="place.id">
        Back to list
      </Link>
    </div>
  );
};

export default Place;
