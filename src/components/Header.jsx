import React, { useState, useEffect } from "react";
import TestLogo from "../assets/TestLogo.svg";
import OverviewIcon from "../assets/home_FILL0_wght300_GRAD0_opsz24.svg";
import PatientsIcon from "../assets/group_FILL0_wght300_GRAD0_opsz24.svg";
import ScheduleIcon from "../assets/calendar_today_FILL0_wght300_GRAD0_opsz24.svg";
import MessageIcon from "../assets/chat_bubble_FILL0_wght300_GRAD0_opsz24.svg";
import TransactionsIcon from "../assets/credit_card_FILL0_wght300_GRAD0_opsz24.svg";
import ProfilePicture from "../assets/senior-woman-doctor-and-portrait-smile-for-health-2023-11-27-05-18-16-utc.png";
import GearIcon from "../assets/settings_FILL0_wght300_GRAD0_opsz24.svg";
import MoreVertical from "../assets/more_vert_FILL0_wght300_GRAD0_opsz24.svg";
import { Tally1, Menu } from "lucide-react";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1200);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1200);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo-container">
        <img src={TestLogo} alt="TechCare Logo" className="logo" />
      </div>

      {/* Navigation Links */}
      {isMobile ? (
        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          <Menu size={24} />
        </div>
      ) : (
        <ul className="nav-link">
          <NavItem icon={OverviewIcon} label="Overview" />
          <NavItem icon={PatientsIcon} label="Patients" active />
          <NavItem icon={ScheduleIcon} label="Schedule" />
          <NavItem icon={MessageIcon} label="Message" />
          <NavItem icon={TransactionsIcon} label="Transactions" />
        </ul>
      )}

      {/* Mobile Navigation Menu */}
      {menuOpen && (
        <ul className="mobile-nav">
          <NavItem icon={OverviewIcon} label="Overview" />
          <NavItem icon={PatientsIcon} label="Patients" active />
          <NavItem icon={ScheduleIcon} label="Schedule" />
          <NavItem icon={MessageIcon} label="Message" />
          <NavItem icon={TransactionsIcon} label="Transactions" />
        </ul>
      )}

      {/* Profile Section */}
      <div className="profile-section">
        <img src={ProfilePicture} alt="Profile" className="profile-picture" />
        <div className="doctor-details">
          <div className="bold-text text-blue">Dr. Jose Simmons</div>
          <div className="normal-text text-grey">General Practitioner</div>
        </div>
        <Tally1 stroke="#d1d1d1" />
        <img src={GearIcon} alt="Settings" className="settings icon" />
        <img src={MoreVertical} alt="More Options" className="settings icon" />
      </div>
    </nav>
  );
};

const NavItem = ({ icon, label, active }) => {
  return (
    <li className={`nav-item ${active ? "active" : ""}`}>
      <img src={icon} alt={label} className="nav-icon icon" />
      <span>{label}</span>
    </li>
  );
};

export default Navbar;