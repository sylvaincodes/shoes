import React from "react";
import { TiSocialYoutubeCircular } from "react-icons/ti";
import { IoLogoWhatsapp } from "react-icons/io";

import {
    AiFillTwitterCircle,
    AiFillGithub,
  } from "react-icons/ai";

function SocialLinks() {
  return (
    <div className="socials-links">
      <AiFillTwitterCircle className="icon-medium" />
      <TiSocialYoutubeCircular className="icon-medium" />
      <AiFillGithub className="icon-medium" />
      <IoLogoWhatsapp className="icon-medium" />
    </div>
  );
}

export default (SocialLinks);
