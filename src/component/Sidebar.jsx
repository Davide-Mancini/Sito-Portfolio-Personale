import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  HouseDoorFill,
  FolderFill,
  FileEarmarkPersonFill,
} from "react-bootstrap-icons";
import photo from "../assets/photo_2025-12-01_23-01-03-removebg-preview.png";
import "./Sidebar.css";

const base = import.meta.env.BASE_URL;

const navItems = [
  { label: "Home", to: "/", Icon: HouseDoorFill },
  { label: "Progetti", to: "/progetti", Icon: FolderFill },
  {
    label: "Curriculum",
    href: `${base}CV_Davide_Mancini.pdf`,
    Icon: FileEarmarkPersonFill,
  },
];

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <button
        className="sidebar-toggle"
        onClick={() => setIsOpen((v) => !v)}
        aria-label="Toggle menu"
      >
        <span
          className="sidebar-toggle-line"
          style={
            isOpen ? { transform: "rotate(45deg) translate(2px, 3.5px)" } : {}
          }
        />
        <span
          className="sidebar-toggle-line"
          style={
            isOpen ? { transform: "rotate(-45deg) translate(2px, -3.5px)", justifyContent:"center", alignItems:"center"} : {}
          }
        />
      </button>

      {isOpen && (
        <div
          className="sidebar-overlay"
          onClick={() => setIsOpen(false)}
        />
      )}

      <aside className={`sidebar${isOpen ? " sidebar-open" : ""}`}>
        <div className="sidebar-profile">
          <div className="sidebar-avatar-flip">
            <div className="sidebar-avatar-inner">
              <div className="sidebar-avatar-front">
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
                  <circle cx="50" cy="50" r="46" fill="#f0edec" />
                  <circle cx="35" cy="42" r="5.5" fill="#1a1a1a" />
                  <circle cx="65" cy="42" r="5.5" fill="#1a1a1a" />
                  <path d="M 30 60 Q 50 76 70 60" stroke="#1a1a1a" strokeWidth="4.5" fill="none" strokeLinecap="round" />
                </svg>
              </div>
              <div className="sidebar-avatar-back">
                <img src={photo} alt="Davide Mancini" style={{backgroundColor:"#f0edec"}}/>
              </div>
            </div>
          </div>
          <p className="sidebar-name">Davide Mancini</p>
          <p className="sidebar-role">{"{ Full Stack Developer }"}</p>
        </div>

        <nav className="sidebar-nav">
          {navItems.map((item) => {
            const { Icon } = item;
            const isActive = location.pathname === item.to;

            if (item.href) {
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className="sidebar-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon size={16} />
                  {item.label}
                </a>
              );
            }

            return (
              <Link
                key={item.label}
                to={item.to}
                className={`sidebar-link${isActive ? " active" : ""}`}
              >
                <Icon size={16} />
                {item.label}
              </Link>
            );
          })}
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
