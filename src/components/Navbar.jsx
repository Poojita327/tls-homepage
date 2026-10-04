import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { navItems } from "../data/schoolData";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header className="navbar">
      <div className="nav-container">

        <a href="#" className="logo" onClick={closeMenu}>
            <img
                src="/images/school-logo.png"
                alt="Tulas International School"
            />
        </a>

        <nav className={`desktop-nav ${open ? "mobile-open" : ""}`}>
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={closeMenu}
            >
              {item.label}
            </a>
          ))}

          <a
            href="#admissions"
            className="nav-cta"
            onClick={closeMenu}
          >
            Admissions
            <ArrowUpRight size={16} />
          </a>
        </nav>

        <button
          className="menu-button"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
        >
          {open ? <X /> : <Menu />}
        </button>

      </div>
    </header>
  );
};

export default Navbar;