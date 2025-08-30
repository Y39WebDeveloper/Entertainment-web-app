import './Navbar.css'
import Logo from '/assets/logo.svg'
import IconHome from '/assets/icon-nav-home.svg'
import IconMovies from '/assets/icon-nav-movies.svg'
import IconTvSeries from '/assets/icon-nav-tv-series.svg'
import IconBookmark from '/assets/icon-nav-bookmark.svg'
import avatar from '/assets/image-avatar.png'

const navItems = [
    {href: '#', icon: IconHome},
    {href: '#', icon: IconMovies},
    {href: '#', icon: IconTvSeries},
    {href: '#', icon: IconBookmark},
]

function Navbar() {
  return (
    <nav>
        <div className="logo"><img src={Logo} alt="logo" /></div>
        <ul className="nav">
            {navItems.map((item, i)=><NavItem key={i} href={item.href} icon={item.icon} isActive={i==0} />)}
        </ul>
        <div className="avatar">
            <img src={avatar} alt="avatar" />
        </div>
    </nav>
  )
}

export default Navbar

function NavItem({href, icon, isActive}) {
    return (
        <li>
            <a href={href} className={isActive?'active':''}><img src={icon} alt="" /></a>
        </li>
    )
}