import { useEffect, useState } from "react";
import "./TrendingCard.css";
import IconBookmarkEmpty from "/assets/icon-bookmark-empty.svg";
import IconBookmarkFull from "/assets/icon-bookmark-full.svg";
import IconCategoryMovies from "/assets/icon-category-movie.svg";
import IconCategoryTv from "/assets/icon-category-tv.svg";
import IconPlay from "/assets/icon-play.svg";
import BgImgSmall from "/assets/thumbnails/beyond-earth/trending/small.jpg";
import BgImgLarge from "/assets/thumbnails/beyond-earth/trending/large.jpg";

function TrendingCard() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 576);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 576);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="trending-card">
      <div className="bg-img">
        {isMobile ? (
          <img src={BgImgSmall} alt="" />
        ) : (
          <img src={BgImgLarge} alt="" />
        )}
      </div>
      <div className="play"><img src={IconPlay} alt="play" /> Play</div>
      <div className="bookmark">
        <img src={IconBookmarkEmpty} alt="bookmark" />
        <div className="mask"></div>
      </div>
      <div className="info">
        <div className="more">
          <span className={isMobile ? "txt-5" : "txt-4"}>2019</span>
          <span className="separate"></span>
          <span className={isMobile ? "txt-5" : "txt-4"}>
            <img src={IconCategoryMovies} alt="" />
            Movie
          </span>
          <span className="separate"></span>
          <span className={isMobile ? "txt-5" : "txt-4"}>PG</span>
        </div>
        <div className={isMobile ? "title txt-3" : "title txt-2-m"}>
          Beyond Earth
        </div>
      </div>
    </div>
  );
}

export default TrendingCard;
