import React from "react";
import { footer, contact, copyRights } from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={footer}>
      <p>
        <span>
          Designer <code>&</code> Developer:
        </span>
        <span>
          <a href="https://www.allenbuhle.com" target="_blank" rel="noreferrer">
            Buhle Allen
          </a>
        </span>
      </p>
      <p className={contact}>
        <span>
          Email:
          <a href="mailto:buhleallen@gmail.com"> buhleallen@gmail.com</a>
        </span>
        <span>
          Call:
          <a href="tel:27748854683"> +27 74-885-4683</a>
        </span>
      </p>
      <small className={copyRights}>All Rights Reserved &copy; 2021</small>
    </div>
  );
};

export default Footer;
