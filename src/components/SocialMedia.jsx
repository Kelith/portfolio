import React from 'react';
import { BsGithub } from 'react-icons/bs';
import { FaLinkedin } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href="https://github.com/Kelith" target="_blank" rel="noreferrer">
        <BsGithub />
      </a>
    </div>
    <div>
      <a href="https://www.linkedin.com/in/davide-garofalo-bb9145151/" target="_blank" rel="noreferrer">
        <FaLinkedin />
      </a>
    </div>
  </div>
);

export default SocialMedia;
