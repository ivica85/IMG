import React, { useState } from "react";
import Heart from "react-animated-heart";

const Image = ({ image, title, author, publishDate, description, remove}) => {
  const [isClick, setClick] = useState(false);

  return (
    <div>
      <h1>{title}</h1>
      <img src={image} />
      <h3>Author: {author}</h3>
      <h4>Publish Date: {publishDate}</h4>
      <h5>Description: {description}</h5>

      <div className="heart">
        <Heart isClick={isClick} onClick={() => setClick(!isClick)} />
      </div>
        {isClick ? <h3>Pregledano</h3> : <h3>Nepregledano</h3>}
      <button onClick={remove}>Remove Post</button>
    </div>
  );
};

export default Image;
