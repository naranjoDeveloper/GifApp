import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

function GifExpertApp() {
  const [categories, setCategories] = useState(["One Piece", "Dragon Ball"]);

  const onAddCategory = (newCategory) => {
    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      {/**TITULO */}
      <h1 className="titulo">Gif Expert App</h1>
      {/**Inputs */}
      <AddCategory onNewCategory={(val) => onAddCategory(val)} />
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
