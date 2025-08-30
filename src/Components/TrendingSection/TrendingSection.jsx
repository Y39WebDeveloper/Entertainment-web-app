import { TrendingCard } from "../";
import "./TrendingSection.css";

function TrendingSection() {
  return (
    <div className="trending-section">
      <h2 className="title-section txt-1">Trending</h2>
      <div className="card-container">
        <TrendingCard />
        <TrendingCard />
        <TrendingCard />
        <TrendingCard />
        <TrendingCard />
        <TrendingCard />
        <TrendingCard />
      </div>
    </div>
  );
}

export default TrendingSection;
