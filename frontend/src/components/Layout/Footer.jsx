import React, { useContext } from "react";
import { Context } from "../../main";
import { Link } from "react-router-dom";
import { FaFacebookF, FaYoutube, FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  const { isAuthorized } = useContext(Context);
  return (
    <footer className={isAuthorized ? "footerShow" : "footerHide"}>
      <div>&copy; All Rights Reserved By vivid vocations.</div>
      <div>
        <Link to={"https://www.facebook.com/profile.php?id=100093343130785&sk=about"} target="_blank">
          <FaFacebookF />
        </Link>
        <Link to={"https://www.youtube.com/channel/UCVYWfKo1tvb3CE_UK3vWQ0Q"} target="_blank">
          <FaYoutube />
        </Link>
        <Link to={"https://www.linkedin.com/in/subhamoy-sasmal-483a40290/"} target="_blank">
          <FaLinkedin />
        </Link>
        <Link to={"https://www.instagram.com/vividvocations/"} target="_blank">
          <RiInstagramFill />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;