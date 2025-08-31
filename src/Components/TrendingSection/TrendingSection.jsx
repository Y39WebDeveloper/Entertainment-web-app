import { useContext, useEffect, useMemo, useState } from "react";
import { TrendingCard } from "..";
import { DataContext } from "../../Contexts/DataContext";
import "./TrendingSection.css";

function TrendingSection() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 576);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 576);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { data } = useContext(DataContext);
  const trendingElement = useMemo(
    () => data.filter((d) => d.isTrending),
    [data]
  );
  return (
    <div className="trending-section">
      <h2 className="title-section txt-1">Trending</h2>
      <div className="card-container">
        {trendingElement.map((t, i) => (
          <TrendingCard
            key={i}
            id={t.id}
            title={t.title}
            category={t.category}
            rating={t.rating}
            year={t.year}
            isBookmarked={t.isBookmarked}
            thumbnail={
              isMobile ? t.thumbnail.trending.small : t.thumbnail.trending.large
            }
            isMobile={isMobile}
          />
        ))}
      </div>
    </div>
  );
}

export default TrendingSection;
