import { useContext } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import React, { useState } from "react";
import Button from "./Button";
import "./Header.css";
import { Link } from "react-router-dom";
import { GlobalData } from "../Context/GlobalData";

const Header = (props) => {
  const { lang, setLang } = useContext(GlobalData);

  // State Initialization
  const [displayAbout, setDisplayAbout] = useState(false);
  const [displayLanguage, setDisplayLanguage] = useState(false);
  const [responsiveDropdown, setResponsiveDropdown] = useState(false);
  const [displayResponsiveNavbar, setDisplayResponsiveNavbar] = useState(false);
  //   Language Change Function

  const ChangeLang = (lang) => {
    setLang(lang);
    setDisplayLanguage(false);
    setDisplayResponsiveNavbar(false);
  };
  const showAboutDropDown = () => {
    setDisplayAbout(!displayAbout);
    setDisplayLanguage(false);
  };
  const showLanguageDropDown = () => {
    setDisplayLanguage(!displayLanguage);
    setDisplayAbout(false);
  };
  return (
    <>
      {/*  Desktop Version */}

      <div
        className={
          lang === "en" ? "header_container" : "header_container ar_lang"
        }
      >
        {/* Header Logo Image  */}
        <div>
          <Link to="/">
            <img
              className="logo_img"
              src="https://dinnerinthesky.ae/images/dits-logo.png"
              alt="logo img"
            />
          </Link>
        </div>
        {/* Navbar */}
        <nav className="navbar">
          <li>
            <Link to="/pricing">{lang === "en" ? "Pricing" : "التسعير"}</Link>
          </li>
          <li>
            <Link to="/our-menu">
              {lang === "en" ? "Chefs Menu" : "قائمة الطهاة"}
            </Link>
          </li>
          <li>
            <Link to="/gallery">{lang === "en" ? "Gallery" : "صالة عرض"}</Link>
          </li>
          <li onClick={() => showAboutDropDown()} className="about_li">
            {lang === "en" ? "About Us" : "معلومات عنا"}{" "}
            <span className="arrow">
              {" "}
              <MdOutlineKeyboardArrowDown />{" "}
            </span>
          </li>
          <li>
            <Link to="/contact">
              {lang === "en" ? "Contact Us" : "اتصل بنا"}
            </Link>
          </li>
          <li>
            <Link to="/reschedule">
              {lang === "en" ? "Reschedule" : "إعادة الجدولة"}
            </Link>
          </li>
          <li>
            <Link to="/blog">{lang === "en" ? "Blogs" : "المدونات"}</Link>
          </li>
          <div className={displayAbout ? "about_dropdown" : "hide"}>
            <ul>
              <Link to="/about-us">
                {lang === "en" ? "About Us" : "معلومات عنا"}
              </Link>
              <Link to="/terms-conditions">
                {lang === "en" ? "Terms & Conditions" : "البنود و الظروف"}
              </Link>
              <Link to="/faqs">
                {lang === "en" ? "Frequently Asked Questions" : "أسئلة مكررة"}
              </Link>
              <Link to="/safety-security">
                {lang === "en" ? "Safety & Security" : "سلامة الامن"}
              </Link>
              <Link to="/events">
                {lang === "en"
                  ? "Corporate & Private Events"
                  : "أحداث الشركات والخاصة"}
              </Link>
            </ul>
          </div>
        </nav>
        {/* Header Button */}

        <div className="button_container">
          <Button btnName="Book Now" font="16px" />
          <li onClick={() => showLanguageDropDown()} className="languages_li">
          {lang==="en"? "Language": "لغة"}{" "}
            <span className="arrow">
              {" "}
              <MdOutlineKeyboardArrowDown />{" "}
            </span>
          </li>
          <div className={displayLanguage ? "languages_dropdown" : "hide"}>
            <div>
              <div
                className="lang-drop-content"
                onClick={() => ChangeLang("en")}
              >
                English
              </div>
              <div
                className="lang-drop-content"
                onClick={() => ChangeLang("ar")}
              >
                {lang === "en" ? "Arabic" : "عربى"}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tablet And Mobile Version */}

      <div className="responsive_header_container">
        <div>
          <img
            className="logo_img"
            src="https://dinnerinthesky.ae/images/dits-logo.png"
            alt="logo img"
          />
        </div>
        <div
          onClick={() => setDisplayResponsiveNavbar(true)}
          className={`${props.menuClass} menu_icon`}
        >
          <AiOutlineMenu />
        </div>
        <div
          className={
            displayResponsiveNavbar ? "responsive_navbar" : "hide_navbar"
          }
        >
          <div className="logo_container">
            <img
              className="logo_img"
              src="https://dinnerinthesky.ae/images/dits-logo.png"
              alt="logo img"
            />
            <div
              onClick={() => setDisplayResponsiveNavbar(false)}
              className="menu_icon"
            >
              <AiOutlineClose />
            </div>
          </div>
          <ul>
            <li>
              <Link to="/pricing">{lang === "en" ? "Pricing" : "التسعير"}</Link>
            </li>
            <li>
              <Link to="/our-menu">
                {lang === "en" ? "Chefs Menu" : "قائمة الطهاة"}
              </Link>
            </li>
            <li>
              <Link to="/gallery">
                {lang === "en" ? "Gallery" : "صالة عرض"}{" "}
              </Link>
            </li>
            <li
              onClick={() => setResponsiveDropdown(!responsiveDropdown)}
              className="about_li"
            >
              {lang === "en" ? "About Us" : "معلومات عنا"}{" "}
              <span className="arrow">
                {" "}
                <MdOutlineKeyboardArrowDown />{" "}
              </span>
            </li>
            <div
              className={
                responsiveDropdown
                  ? "about_responsive_dropdown"
                  : "hide_dropdown"
              }
            >
              <ul>
                <li>
                  <Link to="/about-us">
                    {" "}
                    {lang === "en" ? "About Us" : "معلومات عنا"}
                  </Link>
                </li>
                <li>
                  <Link to="/terms-conditions">
                    {lang === "en" ? "Terms & Conditions" : "البنود و الظروف"}
                  </Link>
                </li>
                <li>
                  <Link to="/faqs">
                    {lang === "en"
                      ? "Frequently Asked Questions"
                      : "أسئلة مكررة"}
                  </Link>
                </li>
                <li>
                  <Link to="/safety-security">
                    {lang === "en" ? "Safety & Security" : "سلامة الامن"}
                  </Link>
                </li>
                <li>
                  <Link to="/events">
                    {" "}
                    {lang === "en"
                      ? "Corporate & Private Events"
                      : "أحداث الشركات والخاصة"}
                  </Link>
                </li>
              </ul>
            </div>
            <li>
              <Link to="/contact">
                {" "}
                {lang === "en" ? "Contact Us" : "اتصل بنا"}
              </Link>
            </li>
            <li>
              <Link to="/reschedule">
                {" "}
                {lang === "en" ? "Reschedule" : "إعادة الجدولة"}
              </Link>
            </li>
            <li>
              <Link to="/blog"> {lang === "en" ? "Blogs" : "المدونات"}</Link>
            </li>
          </ul>
          <div className="button_responsive_container">
            <div className="btn_responsive">
              <Button btnName="Book Now" font="16px" />
            </div>
            <li
              onClick={() => showLanguageDropDown()}
              className="languages_li_responsive"
            >
              {lang==="en"? "Language": "لغة"}{" "}
              <span className="arrow">
                {" "}
                <MdOutlineKeyboardArrowDown />{" "}
              </span>
            </li>
            <div
              className={
                displayLanguage ? "languages_dropdown_responsive" : "hide"
              }
            >
              <div>
                <div
                  className="lang-drop-content-resp"
                  onClick={() => ChangeLang("en")}
                >
                  English
                </div>
                <div
                  className="lang-drop-content-resp"
                  onClick={() => ChangeLang("ar")}
                >
                   {lang === "en" ? "Arabic" : "عربى"}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
