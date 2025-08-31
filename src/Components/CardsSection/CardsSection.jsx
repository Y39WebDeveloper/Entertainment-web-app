import { useContext, useEffect, useMemo, useState } from "react";
import { Card } from "../";
import "./CardsSection.css";
import { DataContext } from "../../Contexts/DataContext";

function CardsSection({ title }) {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 576);

  const { data, screen, search } = useContext(DataContext);

  const moviesData = useMemo(
    () => data.filter((d) => d.category === "Movie"),
    [data]
  );
  const tvSeriesData = useMemo(
    () => data.filter((d) => d.category === "TV Series"),
    [data]
  );
  const bookmarkedData = useMemo(
    () => data.filter((d) => d.isBookmarked),
    [data]
  );

  const selectedData =
    screen === "Movie"
      ? moviesData
      : screen === "TV"
      ? tvSeriesData
      : screen === "Bookmark"
      ? bookmarkedData
      : data;

  const filtredData = selectedData.filter((a) =>
    a.title.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 576);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="recommended-section">
      <h2 className="title-section txt-1">{title}</h2>
      <div className="card-container">
        {filtredData.map((t, i) => (
          <Card
            key={i}
            id={t.id}
            title={t.title}
            category={t.category}
            rating={t.rating}
            year={t.year}
            isBookmarked={t.isBookmarked}
            thumbnail={
              "Entertainment-web-app/" +
              (isMobile ? t.thumbnail.regular.small : t.thumbnail.regular.large)
            }
            isMobile={isMobile}
          />
        ))}
      </div>
    </div>
  );
}

export default CardsSection;
