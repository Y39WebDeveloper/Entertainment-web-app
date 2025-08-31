import { useContext } from "react";
import "./Card.css";
import IconBookmarkEmpty from "/assets/icon-bookmark-empty.svg";
import IconBookmarkFull from "/assets/icon-bookmark-full.svg";
import IconCategoryMovies from "/assets/icon-category-movie.svg";
import IconCategoryTv from "/assets/icon-category-tv.svg";
import IconPlay from "/assets/icon-play.svg";
import { DataContext } from "../../Contexts/DataContext";

function Card({
  title,
  year,
  category,
  rating,
  isBookmarked,
  thumbnail,
  isMobile,
  id
}) {
  const {handleBookmark} = useContext(DataContext)
  return (
    <div className="card">
      <div className="card-img">
        <img src={thumbnail} alt="" />
        <div className="play">
          <img src={IconPlay} alt="play" /> Play
        </div>
        <div className={isBookmarked ? "bookmark active" : "bookmark"} onClick={()=>{handleBookmark(id)}}>
          <img
            src={isBookmarked ? IconBookmarkFull : IconBookmarkEmpty}
            alt="bookmark"
          />
          <div className="mask"></div>
        </div>
      </div>
      <div className="card-body">
        <div className="more">
          <span className={isMobile ? "txt-6" : "txt-5"}>{year}</span>
          <span className="separate"></span>
          <span className={isMobile ? "txt-6" : "txt-5"}>
            <img
              src={category == "Movie" ? IconCategoryMovies : IconCategoryTv}
              alt=""
            />
            {category}
          </span>
          <span className="separate"></span>
          <span className={isMobile ? "txt-5" : "txt-4"}>{rating}</span>
        </div>
        <div className={isMobile ? "title txt-4" : "title txt-3"}>{title}</div>
      </div>
    </div>
  );
}

export default Card;
