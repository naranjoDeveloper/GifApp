import { useState } from "react";
import { getGifs } from "../helpers/getGifs";
import { useEffect } from "react";
import GifItem from "./GifItem";

function GifGrid({ category }) {
  const [images, setImages] = useState([]);

  const getImages = async () => {
    const newImages = await getGifs(category);
    setImages(newImages);
  };

  useEffect(() => {
    getImages();
  }, []);

  return (
    <>
      <h3> {category} </h3>
      <div className="card-grid">
        {images.map(({ id, title, url }) => (
          <GifItem id={id} title={title} url={url} key={id} />
        ))}
      </div>
    </>
  );
}

export default GifGrid;
