import ActorsGrid from "./ActorsGrid.jsx";
import Header from "./Header/Header";
import Footer from "./Footer";
import "../App.css";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [Actors, setActors] = useState([]);
  const [query, setquery] = useState("");
  const [stillLoading, setStillLoading] = useState(true);
  useEffect(() => {
    const getActors = async () => {
      const Results = await axios(
        `https://www.breakingbadapi.com/api/characters?name=${query}`
      );
      console.log(Results.data);
      setActors(Results.data);
      setStillLoading(false);
    };
    getActors();
  }, [query]);

  const searchByName = (query) => {
    setquery(query);
  };

  return (
    <div className="Container">
      <Header onChange={(value) => searchByName(value)} />
      <ActorsGrid Actors={Actors} stillLoading={stillLoading} />
      <Footer />
    </div>
  );
}

export default App;
