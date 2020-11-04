import React, { useState, useEffect } from "react";
import Image from "./Image";
import Axios from "axios";

const images = () => {
  const LINK = `https://api-dev.insidetrak.interactive1.com/homepage/get-latest-images`;

  const [images, setImages] = useState([]);

  const getLink = async () => {
    const response = await Axios.get(LINK);
    setImages(response.data.data);
    console.log(response.data.data);
  };

  const removeImg = (id) => {
    setImages(images.filter((image) => image.id !== id));
  };

  useEffect(() => {
    getLink();
  }, []);
  return (
    <div className={`content`}>
      {images.map((image) => (
        <div>
          <Image
            title={image.title}
            image={image.thumbnailUrls.imedia_300}
            author={image.authorScreenName}
            publishDate={image.publishedOn}
            description={image.description}
            remove={()=> removeImg(image.id) }
            key={image.id}
          />
          </div>
        
      ))}
    </div>
  );
};

export default images;
