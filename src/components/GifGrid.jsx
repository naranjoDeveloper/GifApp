import GifItem from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

function GifGrid({ category }) {
  const { images, isLoading } = useFetchGifs(category);

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
