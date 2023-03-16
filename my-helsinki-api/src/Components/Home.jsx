import { useLocation } from "react-router-dom";

const Home = () => {
    const location = useLocation();
    console.log("Location:" + location)

  return (
    <div>
      <p>Hello {location.state.id} and welcome to the home!</p>
    </div>
  );
};

export default Home;
