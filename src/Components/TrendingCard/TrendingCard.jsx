import { useContext } from "react";
import { DataContext } from "../../Contexts/DataContext";
import "./TrendingCard.css";
import IconBookmarkEmpty from "/assets/icon-bookmark-empty.svg";
import IconBookmarkFull from "/assets/icon-bookmark-full.svg";
import IconCategoryMovies from "/assets/icon-category-movie.svg";
import IconCategoryTv from "/assets/icon-category-tv.svg";
import IconPlay from "/assets/icon-play.svg";

function TrendingCard({
  id,
  title,
  year,
  category,
  isBookmarked,
  rating,
  thumbnail,
  isMobile,
}) {
  const {handleBookmark} = useContext(DataContext)
  return (
    <div className="trending-card">
      <div className="bg-img">
        <img src={thumbnail} alt="" />
      </div>
      <div className="play">
        <img src={IconPlay} alt="play" />
        Play
      </div>
      <div className={isBookmarked ? "bookmark active" : "bookmark"} onClick={()=>{handleBookmark(id)}}>
        <img
          src={isBookmarked ? IconBookmarkFull : IconBookmarkEmpty}
          alt="bookmark"
        />
        <div className="mask"></div>
      </div>
      <div className="info">
        <div className="more">
          <span className={isMobile ? "txt-5" : "txt-4"}>{year}</span>
          <span className="separate"></span>
          <span className={isMobile ? "txt-5" : "txt-4"}>
            <img
              src={category == "Movie" ? IconCategoryMovies : IconCategoryTv}
              alt=""
            />
            {category}
          </span>
          <span className="separate"></span>
          <span className={isMobile ? "txt-5" : "txt-4"}>{rating}</span>
        </div>
        <div className={isMobile ? "title txt-3" : "title txt-2-m"}>
          {title}
        </div>
      </div>
    </div>
  );
}

export default TrendingCard;
