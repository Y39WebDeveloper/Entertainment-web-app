import { useEffect, useState } from "react";
import "./Card.css";
import IconBookmarkEmpty from "/assets/icon-bookmark-empty.svg";
import IconBookmarkFull from "/assets/icon-bookmark-full.svg";
import IconCategoryMovies from "/assets/icon-category-movie.svg";
import IconCategoryTv from "/assets/icon-category-tv.svg";
import IconPlay from "/assets/icon-play.svg";
import CardImgSmall from "/assets/thumbnails/the-great-lands/regular/small.jpg";
import CardImgLarge from "/assets/thumbnails/the-great-lands/regular/large.jpg";

function Card() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 576);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 576);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="card">
      <div className="card-img">
        {isMobile ? (
          <img src={CardImgSmall} alt="" />
        ) : (
          <img src={CardImgLarge} alt="" />
        )}
        <div className="play"><img src={IconPlay} alt="play" /> Play</div>
              <div className="bookmark">
                <img src={IconBookmarkEmpty} alt="bookmark" />
                <div className="mask"></div>
              </div>
      </div>
      <div className="card-body">
        <div className="more">
          <span className={isMobile ? "txt-6" : "txt-5"}>2019</span>
          <span className="separate"></span>
          <span className={isMobile ? "txt-6" : "txt-5"}>
            <img src={IconCategoryMovies} alt="" />
            Movie
          </span>
          <span className="separate"></span>
          <span className={isMobile ? "txt-5" : "txt-4"}>PG</span>
        </div>
        <div className={isMobile ? "title txt-4" : "title txt-3"}>
          The Great Lands
        </div>
      </div>
    </div>
  );
}

export default Card;
