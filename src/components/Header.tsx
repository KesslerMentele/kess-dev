
import {useState} from "react";
import {Link} from "react-router-dom";
import {RiCloseLine, RiMenuLine} from "@remixicon/react";

// Fill the nav's inner height (above the border) instead of using vertical padding, so hover colour can't overlap the border
const LinkStyles = "flex h-full items-center px-4 font-bold";

const links = [
  {to: "/", label: "Home"},
  {to: "/projects", label: "Projects"},
  {to: "/repos", label: "Repos"},
  {to: "/about", label: "About"},
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    // Three columns (logo | links | spacer) so the links stay centred on the page regardless of the logo's width
    <nav className="Header flex sticky top-0 z-10 h-10 w-full justify-between px-4 sm:px-6 lg:px-8">
      {/* Logo / title slot: a home link on wider screens, a menu toggle below sm */}
      <Link to="/" className="hidden sm:block content-center font-bold">kess.dev</Link>
      <button
        type="button"
        className="sm:hidden flex items-center gap-1 justify-self-start font-bold"
        onClick={() => setMenuOpen((open) => !open)}
        aria-expanded={menuOpen}
        aria-controls="mobile-menu"
      >
        {menuOpen ? <RiCloseLine size={18}/> : <RiMenuLine size={18}/>}
        kess.dev
      </button>

      <div className="Header-links hidden sm:flex h-full">
        {links.map(({to, label}) => (
          <Link key={to} to={to} className={LinkStyles}>{label}</Link>
        ))}
      </div>

      {/* Dropdown below the header on small screens */}
      {menuOpen && (
        <div id="mobile-menu"
          className="Header-links sm:hidden absolute top-[calc(100%+2px)] left-0 w-full flex flex-col bg-surface border-b-2 border-foreground"
        >
          {links.map(({to, label}) => (
            <Link key={to} to={to} className="px-4 py-2 font-bold" onClick={closeMenu}>{label}</Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Header;