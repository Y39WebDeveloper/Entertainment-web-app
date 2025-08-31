import "./Navbar.css";
import Logo from "/assets/logo.svg";
import IconHome from "/assets/icon-nav-home.svg";
import IconMovies from "/assets/icon-nav-movies.svg";
import IconTvSeries from "/assets/icon-nav-tv-series.svg";
import IconBookmark from "/assets/icon-nav-bookmark.svg";
import avatar from "/assets/image-avatar.png";
import { useContext } from "react";
import { DataContext } from "../../Contexts/DataContext";

const navItems = [
  { icon: IconHome, screen: "Home" },
  { icon: IconMovies, screen: "Movie" },
  { icon: IconTvSeries, screen: "TV" },
  { icon: IconBookmark, screen: "Bookmark" },
];

function Navbar() {
  const { screen, setScreen, setSearch } = useContext(DataContext);
  return (
    <nav>
      <div className="logo">
        <img
          src={Logo}
          alt="logo"
          onClick={() => {
            setScreen("Home");
            setSearch("");
          }}
        />
      </div>
      <ul className="nav">
        {navItems.map((item, i) => (
          <NavItem
            key={i}
            href={item.href}
            icon={item.icon}
            isActive={item.screen == screen}
            screen={item.screen}
          />
        ))}
      </ul>
      <div className="avatar">
        <img src={avatar} alt="avatar" />
      </div>
    </nav>
  );
}

export default Navbar;

function NavItem({ icon, isActive, screen }) {
  const { setScreen, setSearch } = useContext(DataContext);
  return (
    <li
      onClick={() => {
        setScreen(screen);
        setSearch("");
      }}
    >
      <img className={isActive ? "active" : ""} src={icon} alt="" />
    </li>
  );
}
