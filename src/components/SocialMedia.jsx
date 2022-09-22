import React from 'react';
import { BsTwitter, BsLinkedin } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <a href='https://twitter.com/Uche_kl' target="_blank">
      <BsTwitter />
    </a>
    <a href='https://www.linkedin.com/in/uche-monday-275b4820b/' target="_blank">
      <BsLinkedin />
    </a>
    <a href='https://m.facebook.com/monday.uche1?eav=Afb_NnxlTNNHvuCwLoVdGvF4bBzy4jNyrncf_YtH52QQLGaXGza2oLN6Fd-wvsp8eog&paipv=0'>
      <FaFacebookF />
    </a>
  </div>
);

export default SocialMedia;
