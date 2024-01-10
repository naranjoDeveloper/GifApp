import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

function GifExpertApp() {
  const [categories, setCategories] = useState(["One Piece", "Dragon Ball"]);

  return (
    <>
      {/**TITULO */}
      <h1 className="titulo">Gif Expert App</h1>
      {/**Inputs */}
      <AddCategory setCategories={setCategories} categories={categories} />
      {/*Listado De Gifs */}
      <ol>
        {categories.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ol>
      {/*GifItem */}
    </>
  );
}

export default GifExpertApp;
