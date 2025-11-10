import React, { useState } from "react";
import { Link } from "react-router-dom";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useTheme } from "../context/ThemeContext";
import "../styles/navbar.css";

const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => setMobileMenuOpen((prev) => !prev);
  const handleMobileLinkClick = () => setMobileMenuOpen(false);

  return (
    <nav className="navbar">
      {/* Right side: Logo */}
      <div className="navbar-right">
        <div className="logo-wrapper">
          <AutoStoriesIcon />
        </div>
        <Link to="/" className="logo-text">
          منصة التعلم
        </Link>
      </div>

      {/* Center menu for desktop */}
      <div className="navbar-center desktop-menu">
        <Link to="/">الرئيسية</Link>
        <Link to="/about">حول المنصة</Link>
        <Link to="/courses">الكورسات</Link>
        <Link to="/pathways">المسارات</Link>
        <Link to="/blog">المدونة</Link>
        <Link to="/contact">تواصل معنا</Link>
      </div>

      {/* Left side: Theme toggle */}
      <div className="navbar-left desktop-menu">
        <button
          className="theme-btn"
          onClick={toggleTheme}
          aria-label="تبديل الثيم"
        >
          {theme === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
        </button>
      </div>

      {/* Mobile menu icon */}
      <div className="mobile-menu-icon">
        <button onClick={handleMobileMenuToggle} className="icon-btn">
          {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="mobile-menu">
          <Link to="/" onClick={handleMobileLinkClick}>
            الرئيسية
          </Link>
          <Link to="/about" onClick={handleMobileLinkClick}>
            حول المنصة
          </Link>
          <Link to="/courses" onClick={handleMobileLinkClick}>
            الكورسات
          </Link>
          <Link to="/pathways" onClick={handleMobileLinkClick}>
            المسارات
          </Link>
          <Link to="/contact" onClick={handleMobileLinkClick}>
            تواصل معنا
          </Link>
          <button
            className="theme-btn"
            onClick={() => {
              toggleTheme();
              handleMobileLinkClick();
            }}
          >
            {theme === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
