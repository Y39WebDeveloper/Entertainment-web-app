import {Card} from "../";
import "./RecommendedSection.css";

function RecommendedSection() {
  return (
    <div className="recommended-section">
      <h2 className="title-section txt-1">Recommended for you</h2>
      <div className="card-container">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default RecommendedSection;
