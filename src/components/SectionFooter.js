import React from 'react';
import '../assets/css/SectionFooter.css';
import { useSelector } from 'react-redux';

const SectionFooter = () => {
  const conditionReducer = useSelector((state) => state.isLogin);

  return (
    <footer className={conditionReducer ? 'footerBlock' : 'footerNone'}>
      <div className="container footer__container">
        <div className="row-footer">
          <nav className="nav__footer--parts">
            <ul className="nav__list footer__about">
              <li className="nav__item footer__title">
                <a className="footer__nav--link" href="#">
                  About
                </a>
              </li>
              <li className="nav__item footer__item">
                <a className="footer__nav--link" href="#">
                  How Triphouse works
                </a>
              </li>
              <li className="nav__item footer__item">
                <a className="footer__nav--link" href="#">
                  Careers
                </a>
              </li>
              <li className="nav__item footer__item">
                <a className="footer__nav--link" href="#">
                  Privacy
                </a>
              </li>
              <li className="nav__item footer__item">
                <a className="footer__nav--link" href="">
                  Terms
                </a>
              </li>
            </ul>

            <ul className="nav__list footer__property">
              <li className="nav__item footer__title">
                <a className="footer__nav--link" href="#">
                  Property types
                </a>
              </li>
              <li className="nav__item footer__item">
                <a className="footer__nav--link" href="#">
                  Guest houses
                </a>
              </li>
              <li className="nav__item footer__item">
                <a className="footer__nav--link" href="#">
                  Hotels
                </a>
              </li>
              <li className="nav__item footer__item">
                <a className="footer__nav--link" href="#">
                  Apartments
                </a>
              </li>
              <li className="nav__item footer__item">
                <a className="footer__nav--link" href="#">
                  Villas
                </a>
              </li>
              <li className="nav__item footer__item">
                <a className="footer__nav--link" href="#">
                  Holiday homes
                </a>
              </li>
              <li className="nav__item footer__item">
                <a className="footer__nav--link" href="#">
                  Hostels
                </a>
              </li>
            </ul>

            <ul className="nav__list footer__support">
              <li className="nav__item footer__title">
                <a className="footer__nav--link" href="#">
                  Support
                </a>
              </li>
              <li className="nav__item footer__item">
                <a className="footer__nav--link" href="#">
                  Contact Customer Service
                </a>
              </li>
              <li className="nav__item footer__item">
                <a className="footer__nav--link" href="#">
                  FAQ
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <p className="footer__copyright">&#169; 2020 Triphouse, Inc. All rights reserved</p>
      </div>
    </footer>
  );
};

export default SectionFooter;
