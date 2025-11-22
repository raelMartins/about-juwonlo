import Link from 'next/link';
import { useEffect, useState } from 'react';
import styles from '../styles/navbar.module.scss';
import IconSVG from './IconSVG';
import CustomHamburger from './CustomHamburger';

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  const [stickyNav, setStickyNav] = useState(true);
  const [atTheTop, setAtTheTop] = useState(true);

  useEffect(() => {
    const overlay = document.getElementById('navOverlay');
    if (overlay) {
      if (showNav) {
        overlay.style.display = 'block';
        setTimeout(() => {
          overlay.classList.add(styles.openOverlay);
        }, 10);
      } else {
        overlay.classList.remove(styles.openOverlay);
        setTimeout(() => {
          overlay.style.display = 'none';
        }, 320);
      }
    }
  }, [showNav]);

  useEffect(() => {
    let oldScroll: number;
    window.onscroll = function (e) {
      // print "false" if direction is down and "true" if up
      setStickyNav(oldScroll > window.scrollY || window.scrollY < 130);
      if (window.scrollY === 0) {
        setAtTheTop(true);
      } else {
        setAtTheTop(false);
      }
      oldScroll = window.scrollY;
    };
  }, []);

  return (
    <>
      <div
        className={styles.mobileOverlay}
        id='navOverlay'
        onClick={() => setShowNav(!showNav)}
      ></div>
      <header
        className={styles.navbar}
        style={
          !stickyNav && !showNav
            ? { transform: 'translateY(-100%)' }
            : atTheTop
            ? { boxShadow: 'none' }
            : {}
        }
      >
        <div className={styles.navbarContainer}>
          <div className={styles.logo}>
            <div className={styles.icon}>
              <svg
                version='1.1'
                id='Capa_1'
                xmlns='http://www.w3.org/2000/svg'
                xmlnsXlink='http://www.w3.org/1999/xlink'
                x='0px'
                y='0px'
                width='40px'
                height='40px'
                viewBox='0 0 485.688 485.688'
                // style='enable-background:new 0 0 485.688 485.688;'
                xmlSpace='preserve'
              >
                <g>
                  <g>
                    <path
                      className={styles.logoLine}
                      d='M364.269,453.155H121.416L0,242.844L121.416,32.533h242.853l121.419,210.312L364.269,453.155z M131.905,434.997h221.878l110.939-192.152L353.783,50.691H131.905L20.966,242.844L131.905,434.997z'
                    />
                  </g>
                </g>
              </svg>
              <Link href='/'>
                <h1>A</h1>
              </Link>
            </div>
          </div>
          <div className={styles.navigation}>
            <CustomHamburger
              isOpen={showNav}
              toggle={() => setShowNav(!showNav)}
            />
            <nav style={showNav ? { transform: 'translateX(0%)' } : {}}>
              <Link href='/#about' onClick={() => setShowNav(false)}>
                <span>01.</span>About
              </Link>
              <Link href='/#jobs' onClick={() => setShowNav(false)}>
                <span>02.</span>Experience
              </Link>
              <Link href='/#projects' onClick={() => setShowNav(false)}>
                <span>03.</span>Work
              </Link>
              <Link href='/#contact' onClick={() => setShowNav(false)}>
                <span>04.</span>Contact
              </Link>
              <Link
                href='/resume/Assumpta_Obasi_Résumé.pdf'
                target='_blank'
                rel='noreferrer'
                className={styles.resumeButton}
              >
                Resume
              </Link>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
