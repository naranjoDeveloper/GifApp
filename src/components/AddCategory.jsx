import { useState } from "react";

export function AddCategory({ setCategories, categories }) {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();

    if (inputValue.length <= 1) return;

    setCategories([...categories, inputValue]);

    setInputValue("");
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Buscar GIFS"
          value={inputValue}
          onChange={onInputChange}
        />
      </form>
    </div>
  );
}
