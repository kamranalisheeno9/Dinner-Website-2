import { useContext } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import React, { useState } from "react";
import Button from "./Button";
import "./Header.css";
import { Link } from "react-router-dom";
import { GlobalData } from "../Context/GlobalData";
import Logo from "../assets/logo.png";
import i18n from '../i18n'
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
            <img className="logo_img" src={Logo} alt="logo img" />
          </Link>
        </div>
        {/* Navbar */}
        <nav className="navbar">
          <li>
            <Link to="/pricing">{i18n.t('pricing')}</Link>
          </li>
          <li>
            <Link to="/our-menu">
             {i18n.t('chefs_menu')}
            </Link>
          </li>
          <li>
            <Link to="/gallery">{i18n.t('gallery')}</Link>
          </li>
          <li onClick={() => showAboutDropDown()} className="about_li">
            {i18n.t('about_us')}{" "}
            <span className="arrow">
              {" "}
              <MdOutlineKeyboardArrowDown />{" "}
            </span>
          </li>
          <li>
            <Link to="/contact">
              {i18n.t('contact_us')}
            </Link>
          </li>
          <li>
            <Link to="/reschedule">
              {i18n.t('reschedule')}
            </Link>
          </li>
          <li>
            <Link to="/blog">{i18n.t('blogs')}</Link>
          </li>
          <div className={displayAbout ? "about_dropdown" : "hide"}>
            <ul>
              <Link to="/about-us">
                {i18n.t('about_us')}
              </Link>
              <Link to="/terms-conditions">
                {i18n.t('terms_conditions')}
              </Link>
              <Link to="/faqs">
              {i18n.t('faqs')}
              </Link>
              <Link to="/safety-security">
                {i18n.t('safety_security')}
              </Link>
              <Link to="/events">
              {i18n.t('cooperative_privete_events')}
              </Link>
            </ul>
          </div>
        </nav>
        {/* Header Button */}

        <div className="button_container">
          <Button btnName="Book Now" font="16px" />
          <li onClick={() => showLanguageDropDown()} className="languages_li">
            {i18n.t('language')}{" "}
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
                {i18n.t('english')}
              </div>
              <div
                className="lang-drop-content"
                onClick={() => ChangeLang("ar")}
              >
                {i18n.t('arabic')}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tablet And Mobile Version */}

      <div className="responsive_header_container">
        <div>
          <img className="logo_img" src={Logo} alt="logo img" />
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
            <img className="logo_img" src={Logo} alt="logo img" />
            <div
              onClick={() => setDisplayResponsiveNavbar(false)}
              className="menu_icon"
            >
              <AiOutlineClose />
            </div>
          </div>
          <ul>
            <li>
              <Link to="/pricing">{i18n.t('pricing')}</Link>
            </li>
            <li>
              <Link to="/our-menu">
               {i18n.t('chefs_menu')}
              </Link>
            </li>
            <li>
              <Link to="/gallery">
                {i18n.t('gallery')}{" "}
              </Link>
            </li>
            <li
              onClick={() => setResponsiveDropdown(!responsiveDropdown)}
              className="about_li"
            >
              {i18n.t('about_us')}{" "}
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
                    {i18n.t('about_us')}
                  </Link>
                </li>
                <li>
                  <Link to="/terms-conditions">
                    {i18n.t('terms_conditions')}
                  </Link>
                </li>
                <li>
                  <Link to="/faqs">
                  {i18n.t('faqs')}
                  </Link>
                </li>
                <li>
                  <Link to="/safety-security">
                    {i18n.t('safety_security')}
                  </Link>
                </li>
                <li>
                  <Link to="/events">
                    {" "}
                    {i18n.t('cooperative_privete_events')}
                  </Link>
                </li>
              </ul>
            </div>
            <li>
              <Link to="/contact">
                {" "}
                {i18n.t('contact_us')}
              </Link>
            </li>
            <li>
              <Link to="/reschedule">
                {" "}
                {i18n.t('reschedule')}
              </Link>
            </li>
            <li>
              <Link to="/blog"> {i18n.t('arabic')}</Link>
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
              {i18n.t('language')}{" "}
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
                  {i18n.t('english')}
                </div>
                <div
                  className="lang-drop-content-resp"
                  onClick={() => ChangeLang("ar")}
                >
                  {i18n.t('arabic')}
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
