import React from 'react';
import coverImage from "../Assets/Cover/cover-image.png"
function About () {
  return (
    <div className="App">
<h1>How to play</h1>
<img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
    </div>
  );
}

export default About;