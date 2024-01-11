import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

function GifExpertApp() {
  const [categories, setCategories] = useState(["One Piece"]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;

    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      <h1 className="titulo">Gif Expert App</h1>

      <AddCategory onNewCategory={(val) => onAddCategory(val)} />

      {categories.map((item) => (
        <GifGrid category={item} key={item} />
      ))}
    </>
  );
}

export default GifExpertApp;
