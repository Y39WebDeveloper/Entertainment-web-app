import { useContext, useEffect, useState } from "react";
import { CardsSection, SearchInput, TrendingSection } from "../../Components";
import "./Home.css";
import { DataContext } from "../../Contexts/DataContext";

function Home() {
  const { screen, search } = useContext(DataContext);
  const [title, setTitle] = useState("Recommended for you");

  useEffect(() => {
    switch (screen) {
      case "Movie":
        setTitle("Movies");
      case "TV":
        setTitle("TV Series");
      case "Bookmark":
        setTitle("Bookmarked Movies");
      default:
        setTitle("Recommended for you");
        break;
    }
  }, [screen]);
  return (
    <div className="home-page">
      <SearchInput placeholder={"Search for movies or TV series"} />
      {screen === "Home" && search === "" && <TrendingSection />}
      <CardsSection title={title} />
    </div>
  );
}

export default Home;
