import React from "react";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import { blue, red, grey } from "@mui/material/colors";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const Footer = () => {
  return (
    <>
      <footer>
        <hr className="footerline1" />
        <div className="text-center">
          <div className="info">
            <a
              href="https://mern-portfolio-81dg.onrender.com"
              target="_blank"
              rel="Portfolio"
            >
              <p className="footercss">About</p>
            </a>
            <a
              href="mailto:shivukumaraspatil01@gmail.com"
              target="_blank"
              rel="Email"
            >
              <p className="footercss">Contact Us</p>
            </a>
          </div>
          <br />
          <p className="socialmedia">
            <a
              href="https://www.facebook.com/shivakumara.patil.940"
              target="_blank"
              rel="Facebook"
            >
              <FacebookOutlinedIcon
                sx={{ color: blue[500] }}
                fontSize="large"
              />
            </a>
            <a
              href="https://instagram.com/shivukumara_patil"
              target="_blank"
              rel="Instagram"
            >
              <InstagramIcon sx={{ color: red[500] }} fontSize="large" />
            </a>
            <a
              href="https://www.linkedin.com/in/shivukumara"
              target="_blank"
              rel="Linkedin"
            >
              <LinkedInIcon sx={{ color: blue[500] }} fontSize="large" />
            </a>
            <a
              href="https://github.com/SHIVUKUMARA"
              target="_blank"
              rel="GitHub"
            >
              <GitHubIcon sx={{ color: grey[900] }} fontSize="large" />
            </a>
          </p>
        </div>
        <p className="text-center">
          Food Delivery Website - 2023-2024,All Rights Reserved..
        </p>
      </footer>
    </>
  );
};

export default Footer;
