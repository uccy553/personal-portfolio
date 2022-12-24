import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './About.scss';
import { urlFor, client } from '../../client';
import { AppWrap, MotionWrap } from '../../wrapper';

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';
    client.fetch(query).then((data) => setAbouts(data));
  }, []);

  return (
    <>
      <h2 className="head-text">
        I Know That <span>Good Development</span> <br /> means{' '}
        <span>Good business</span>
      </h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>

      <h2 className="head-text">More About Me</h2>
      <p className="p-text" style={{ marginTop: '1rem' }}>
          I live in Lagos Nigeria,  I have a strong foundation in essential web development technologies such as HTML, CSS, and JavaScript. I have always been passionate about web development and have continually honed my skills through consistent practice. My focus is on creating high-quality websites with clean code and well-organized architecture. I have a wide range of experience and expertise in web design and development, including proficiency in frontend languages like HTML5, CSS3, JavaScript, and ReactJS. In the past 18 months, I have successfully mastered the art of building dynamic pages. You can view some of my recent projects live or access their source code below.
      </p>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, 'app__about'),
  'about',
  'app__whitebg'
);
