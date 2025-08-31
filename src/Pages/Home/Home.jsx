import { useContext, useEffect, useState } from "react";
import { CardsSection, SearchInput, TrendingSection } from "../../Components";
import "./Home.css";
import { DataContext } from "../../Contexts/DataContext";

function Home() {
  const { screen, search } = useContext(DataContext);

  const title =
    screen === "Movie"
      ? "Movies"
      : screen === "TV"
      ? "TV Series"
      : screen === "Bookmark"
      ? "Bookmarked Movies"
      : "Recommended for you";
  const placeholder =
    screen === "Movie"
      ? "movies"
      : screen === "TV"
      ? "TV series"
      : screen === "Bookmark"
      ? "bookmarked shows"
      : "movies or TV series";

  return (
    <div className="home-page">
      <SearchInput placeholder={`Search for ${placeholder}`} />
      {screen === "Home" && search === "" && <TrendingSection />}
      <CardsSection title={title} />
    </div>
  );
}

export default Home;
