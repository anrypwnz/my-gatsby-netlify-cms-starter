/* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions */
import React, { useEffect, useState } from 'react';
import { CSSTransition } from "react-transition-group";
import ReactHamburgerMenu from 'react-hamburger-menu';
import s from './header.module.css';
import logo from '../../images/logo.svg';

export default function HeaderBlock() {
  const [isNavVisible, setIsNavVisible] = useState(false);
  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
  };

  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const handleMediaQueryChange = mediaQuery => {
    if (mediaQuery.matches) {
      setIsSmallScreen(true);
    } else {
      setIsSmallScreen(false);
    }
  };
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width:768px)");
    mediaQuery.addEventListener('change', handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery);
    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, []);

  const [isBurgerOpen, setBurgerIsOpen] = useState(false);
  const handleBurgerClick = () => {
    setBurgerIsOpen(!isBurgerOpen);
  };


  return (
    <header className={s.header}>
        <img className={s.logo}
             src={logo}
             alt='logo'/>
        <CSSTransition
          in={!isSmallScreen || isNavVisible}
          timeout={250}
          classNames={s}
          unmountOnExit
        >
          <nav className={s.nav}>
            <a className={s.link} href='#about'>О нас</a>
            <a className={s.link} href='#contact'>Контакты</a>
            <a className={s.link} href="#prices">Цены</a>
          </nav>
        </CSSTransition>
        <div onClick={toggleNav}
             role='navigation'
             onKeyDown={toggleNav}
             className={s.burger}>
          <ReactHamburgerMenu
            isOpen={isBurgerOpen}
            menuClicked={handleBurgerClick}
          />
        </div>
    </header>

  );
};
