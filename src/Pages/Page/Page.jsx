import { CardsSection, SearchInput, TrendingSection } from "../../Components";
import "./Page.css";

function Page() {
  console.log("page render");
  return (
    <div className="page">
      <SearchInput placeholder={"Search for TV series"} />
      <CardsSection title={"TV Series"} />
    </div>
  );
}

export default Page;
