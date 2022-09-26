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
          I live in Lagos Nigeria, I am a solution-oriented website designer/developer, and I have a deep background in basic web development (HTML, CSS, and   Javascript) I rejuvenated my passion for website development through constant and consistent practice. I possess great experience and skills in web design & development. My primary focus is on creating quality websites using clean code and well-structured architecture. I am a hard worker and passionate about what I do. With knowledge in most frontend and backend languages such as HTML5, CSS3, JAVASCRIPT, and ReactJS. I opted to delve more into the web development industry. Nearly eighteen months of solid work and practice into it, I recently mastered the art of dynamic page building. View live or Check out the source code to some of my recent projects below.
      </p>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, 'app__about'),
  'about',
  'app__whitebg'
);
